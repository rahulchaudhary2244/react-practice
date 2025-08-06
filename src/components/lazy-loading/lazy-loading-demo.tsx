import React, { Suspense } from 'react';

const HeavyComponent = React.lazy(() => import('./heavy-component'));

export const LazyLoadingDemo = () => {
  return (
    <Suspense
      fallback={
        <div className="text-2xl text-center font-bold m-8 p-8">
          Loading Heavy Component...
        </div>
      }
    >
      <HeavyComponent />
    </Suspense>
  );
};
