import { useSequential } from "../hooks/useSequential";
import { useState, useLayoutEffect, useRef, useId } from "react";

export default function Typewriter({ text = "", speed = 50, className = "" }) {
  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const ref = useRef(null);
  const id = useId();
  const sequential = useSequential();
  const register = sequential?.register;
  const unregister = sequential?.unregister;

  useLayoutEffect(() => {
    const node = ref.current;
    const content = text ?? "";

    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!register || prefersReducedMotion || !content) {
      setDisplayed(content);
      return;
    }

    let cancelled = false;
    let timer = null;
    let resolvePlay = null;

    const finish = () => {
      if (timer != null) {
        clearInterval(timer);
        timer = null;
      }
      if (!cancelled) setIsTyping(false);
      resolvePlay?.();
      resolvePlay = null;
    };

    const startFn = () =>
      new Promise((resolve) => {
        resolvePlay = resolve;
        if (cancelled || !content) {
          finish();
          return;
        }

        setIsTyping(true);
        let i = 0;
        const step = () => {
          if (cancelled) {
            finish();
            return false;
          }
          i += 1;
          setDisplayed(content.slice(0, i));
          if (i >= content.length) {
            finish();
            return false;
          }
          return true;
        };

        if (!step()) return;
        timer = setInterval(() => {
          if (!step()) return;
        }, speed);
      });

    register(id, startFn, node);

    return () => {
      cancelled = true;
      finish();
      unregister?.(id);
    };
  }, [text, speed, register, unregister, id]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">
        {displayed}
        {isTyping && (
          <span className="inline-block ml-1 animate-blink">|</span>
        )}
        <span className="invisible">{text.slice(displayed.length)}</span>
      </span>
    </span>
  );
}
