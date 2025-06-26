import { useState } from 'react';
import { PlainComponent } from './plain-component';
import { MemoComponent } from './memo-component';

export const MemoExample = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="m-2">
      <div>Observe logs when count is updating</div>
      <div className="font-bold text-xl">{count}</div>
      <button
        className="border cursor-pointer hover:bg-gray-300 p-2 rounded"
        onClick={() => setCount(count + 1)}
      >
        increament
      </button>
      <PlainComponent />
      <MemoComponent />
    </div>
  );
};
