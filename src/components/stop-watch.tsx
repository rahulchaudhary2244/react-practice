import { useEffect, useRef, useState } from 'react';

export const StopWatch = () => {
  const timerId = useRef<number | null>(null);
  const [time, setTime] = useState(0);

  const play = () => {
    timerId.current = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
  };

  const pause = () => {
    if (timerId.current) clearInterval(timerId.current);
    timerId.current = null;
  };

  const reset = () => {
    if (timerId.current) clearInterval(timerId.current);
    timerId.current = null;
    setTime(0);
  };

  useEffect(() => {
    return reset();
  }, []);

  return (
    <div className="m-2">
      <h1 className="font-bold text-xl">{time}</h1>
      <div className="flex gap-2">
        <button
          className="border cursor-pointer hover:bg-gray-300 p-2 rounded"
          onClick={play}
        >
          play
        </button>
        <button
          className="border cursor-pointer hover:bg-gray-300 p-2 rounded"
          onClick={pause}
        >
          pause
        </button>
        <button
          className="border cursor-pointer hover:bg-gray-300 p-2 rounded"
          onClick={reset}
        >
          reset
        </button>
      </div>
    </div>
  );
};
