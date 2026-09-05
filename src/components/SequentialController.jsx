import { createContext, useCallback, useEffect, useRef } from "react";

const SequentialContext = createContext(null);

// Elements within this Y-distance count as the same visual row
const ROW_THRESHOLD_PX = 24;
const HEADER_SELECTOR = "nav.fixed";
const STABLE_FRAMES_NEEDED = 3;
const MAX_SETTLE_FRAMES = 45;

function compareVisual(a, b) {
  if (Math.abs(a.top - b.top) <= ROW_THRESHOLD_PX) {
    return a.left - b.left;
  }
  return a.top - b.top;
}

function getHeaderInset() {
  const header = document.querySelector(HEADER_SELECTOR);
  if (!header) return 0;
  return Math.max(0, header.getBoundingClientRect().bottom);
}

function measure(el) {
  const rect = el.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX,
  };
}

function isInViewport(el) {
  if (!el?.isConnected) return false;
  const rect = el.getBoundingClientRect();
  const topInset = getHeaderInset();
  return (
    rect.bottom > topInset + 1 &&
    rect.right > 1 &&
    rect.top < window.innerHeight - 1 &&
    rect.left < window.innerWidth - 1
  );
}

// Native scroll restoration can land after the first paint (especially on
// reload mid-page). Wait until the Y position stops changing so the initial
// visible set is the one the user actually sees.
function waitForScrollSettle() {
  return new Promise((resolve) => {
    let lastY = window.scrollY;
    let stable = 0;
    let frames = 0;

    const onScroll = () => {
      lastY = window.scrollY;
      stable = 0;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const done = () => {
      window.removeEventListener("scroll", onScroll);
      requestAnimationFrame(() => resolve());
    };

    const tick = () => {
      frames += 1;
      const y = window.scrollY;
      if (y === lastY) {
        stable += 1;
      } else {
        stable = 0;
        lastY = y;
      }

      if (stable >= STABLE_FRAMES_NEEDED || frames >= MAX_SETTLE_FRAMES) {
        done();
        return;
      }
      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  });
}

export function SequentialProvider({ children }) {
  const itemsRef = useRef(new Map());
  const queueRef = useRef([]);
  const pendingRef = useRef([]);
  const runningRef = useRef(false);
  const readyRef = useRef(false);
  const rafRef = useRef(null);
  const observerRef = useRef(null);
  const elToItemRef = useRef(new WeakMap());
  const runQueueRef = useRef(null);
  const enqueueVisibleRef = useRef(null);

  const observeIdle = useCallback((item) => {
    const observer = observerRef.current;
    if (observer && item.state === "idle" && item.el?.isConnected) {
      observer.observe(item.el);
    }
  }, []);

  enqueueVisibleRef.current = (candidates) => {
    const batch = [];
    for (const item of candidates) {
      if (item.state !== "idle" || !item.el?.isConnected) continue;
      if (!isInViewport(item.el)) continue;

      item.state = "queued";
      observerRef.current?.unobserve(item.el);
      batch.push({ item, ...measure(item.el) });
    }

    if (batch.length === 0) return;

    queueRef.current = [...queueRef.current, ...batch].sort(compareVisual);
    runQueueRef.current?.();
  };

  const scheduleFlush = useCallback((candidates) => {
    pendingRef.current.push(...candidates);
    if (rafRef.current != null) return;

    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const batch = pendingRef.current;
      pendingRef.current = [];
      if (!readyRef.current) return;
      enqueueVisibleRef.current?.(batch);
      for (const item of batch) {
        if (item.state === "idle") observeIdle(item);
      }
    });
  }, [observeIdle]);

  runQueueRef.current = async () => {
    if (runningRef.current || !readyRef.current) return;
    runningRef.current = true;

    try {
      while (queueRef.current.length > 0) {
        const next = queueRef.current.shift();
        const { item } = next;
        if (item.state !== "queued") continue;

        // User scrolled away while this item waited — don't play off-screen
        if (!isInViewport(item.el)) {
          item.state = "idle";
          observeIdle(item);
          continue;
        }

        item.state = "playing";
        try {
          await item.startFn();
        } finally {
          if (item.state === "playing") {
            item.state = "done";
          }
        }
      }
    } finally {
      runningRef.current = false;
      if (queueRef.current.length > 0) {
        runQueueRef.current();
      }
    }
  };

  const register = useCallback(
    (id, startFn, el) => {
      const prev = itemsRef.current.get(id);
      if (prev?.el && prev.el !== el) {
        observerRef.current?.unobserve(prev.el);
      }

      const item = prev ?? { id, state: "idle" };
      item.startFn = startFn;
      item.el = el;
      itemsRef.current.set(id, item);
      elToItemRef.current.set(el, item);

      if (readyRef.current && item.state === "idle") {
        scheduleFlush([item]);
      }
    },
    [scheduleFlush]
  );

  const unregister = useCallback((id) => {
    const item = itemsRef.current.get(id);
    if (!item) return;
    if (item.el) observerRef.current?.unobserve(item.el);
    queueRef.current = queueRef.current.filter((entry) => entry.item !== item);
    pendingRef.current = pendingRef.current.filter((entry) => entry !== item);
    itemsRef.current.delete(id);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!readyRef.current) return;
        const visible = [];
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const item = elToItemRef.current.get(entry.target);
          if (item) visible.push(item);
        }
        if (visible.length > 0) scheduleFlush(visible);
      },
      { threshold: 0, rootMargin: `-${getHeaderInset()}px 0px 0px 0px` }
    );
    observerRef.current = observer;

    let cancelled = false;

    const boot = async () => {
      await waitForScrollSettle();
      if (cancelled) return;

      readyRef.current = true;

      const idleItems = [...itemsRef.current.values()].filter(
        (item) => item.state === "idle"
      );

      // Snapshot the current viewport first so the opening sequence is
      // complete and already in reading order before anything types.
      enqueueVisibleRef.current?.(idleItems);

      for (const item of idleItems) {
        if (item.state === "idle") observeIdle(item);
      }
    };

    boot();

    return () => {
      cancelled = true;
      readyRef.current = false;
      observer.disconnect();
      observerRef.current = null;
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      pendingRef.current = [];
      queueRef.current = [];
      runningRef.current = false;
    };
  }, [observeIdle, scheduleFlush]);

  return (
    <SequentialContext.Provider value={{ register, unregister }}>
      {children}
    </SequentialContext.Provider>
  );
}

export { SequentialContext };
