import { withLogger } from './with-logger';

const MyComponent = ({ name }: { name: string }) => {
  return <div>Here is {name}</div>;
};

export const MyComponentWithLogger = withLogger(MyComponent);
