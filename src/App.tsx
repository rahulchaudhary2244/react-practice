import clsx from 'clsx';
import { HocExample } from './components/hoc-example/hoc-example';

function App() {
  return (
    <>
      <h1 className={clsx('text-3xl font-bold underline text-center')}>
        Hello world!
      </h1>
      {/* <ExampleOfUseFetch /> */}
      {/* <MemoExample /> */}
      {/* <DebounceCallbackExample /> */}
      <HocExample />
    </>
  );
}

export default App;
