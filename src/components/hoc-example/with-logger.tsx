import { useEffect, type ComponentType } from 'react';

export const withLogger = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const ComponentWithLogger = (props: P) => {
    useEffect(() => {
      console.log(
        `${WrappedComponent.name} rendered with ${JSON.stringify(props)}`
      );
    }, [props]);

    return <WrappedComponent {...props} />;
  };

  return ComponentWithLogger;
};
