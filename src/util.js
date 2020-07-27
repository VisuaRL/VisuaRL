import { useRef, useEffect } from "react";

function indexOf2d(arr, val) {
  return arr.flatMap((row, x) =>
    row.reduce((a, e, y) => (e === val ? a.concat({ x, y }) : a), [])
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export { indexOf2d, useInterval };
