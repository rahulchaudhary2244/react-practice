/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';

export const useDebounce = (
  callback: VoidFunction,
  delay: number,
  deps: unknown[]
) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      callback();
      return;
    }

    const id = setTimeout(() => {
      callback();
    }, delay);

    return () => clearTimeout(id);
  }, [...deps]);
};
