import { createContext, useRef } from "react";

const SequentialContext = createContext();

export function SequentialProvider({ children }) {
  const queueRef = useRef([]);
  const runningRef = useRef(false);

  const register = (startFn) => {
    queueRef.current.push(startFn);
    runQueue();
  };

  const runQueue = async () => {
    if (runningRef.current) return;
    runningRef.current = true;

    while (queueRef.current.length > 0) {
      const next = queueRef.current.shift();
      await next();
    }

    runningRef.current = false;
  };

  return (
    <SequentialContext.Provider value={{ register }}>
      {children}
    </SequentialContext.Provider>
  );
}

export { SequentialContext };
