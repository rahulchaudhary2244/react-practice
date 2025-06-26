import { memo, useRef } from 'react';

const Component = () => {
  console.log('MemoComponent rendered');

  const renderCount = useRef(0);
  renderCount.current = renderCount.current + 1;

  return <div>Memo Component, renderCount:{renderCount.current}</div>;
};

export const MemoComponent = memo(Component);
