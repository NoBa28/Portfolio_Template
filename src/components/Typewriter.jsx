import { useState, useEffect, useRef } from "react";
import { useSequential } from "../hooks/useSequential";

export default function Typewriter({ text, speed = 50, className = "" }) {
  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(false); // cursor-status
  const ref = useRef(null);
  const triggeredRef = useRef(false);
  const { register } = useSequential();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggeredRef.current) {
          triggeredRef.current = true;
          observer.disconnect();

          // register animation in queue
          register(
            () =>
              new Promise((resolve) => {
                setIsTyping(true); // start cursor
                let i = 0;
                const timer = setInterval(() => {
                  setDisplayed(text.slice(0, i + 1));
                  i++;
                  if (i === text.length) {
                    clearInterval(timer);
                    setIsTyping(false); // disappear cursor
                    resolve();
                  }
                }, speed);
              })
          );
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [text, speed, register]);

  return (
    <span ref={ref} className={className}>
      {displayed}
      {isTyping && <span className="inline-block ml-1 animate-blink">|</span>}
    </span>
  );
}
