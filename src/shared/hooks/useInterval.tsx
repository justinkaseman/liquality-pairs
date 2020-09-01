import { useRef, useEffect } from "react";

export function useInterval(callback: Function, delay: number) {
  const savedCallback: any = useRef({});

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
