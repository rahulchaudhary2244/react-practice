import clsx from 'clsx';
import { DebounceCallbackExample } from './components/debounce-callback-example';

function App() {
  return (
    <>
      <h1 className={clsx('text-3xl font-bold underline text-center')}>
        Hello world!
      </h1>
      {/* <ExampleOfUseFetch /> */}
      {/* <MemoExample /> */}
      <DebounceCallbackExample />
    </>
  );
}

export default App;
