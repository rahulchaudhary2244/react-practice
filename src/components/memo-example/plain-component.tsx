import { useRef } from 'react';

export const PlainComponent = () => {
  console.log('PlainComponent rendered');

  const renderCount = useRef(0);
  renderCount.current = renderCount.current + 1;

  return <div>Plain Component, renderCount:{renderCount.current}</div>;
};
