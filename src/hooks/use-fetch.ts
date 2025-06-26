import { useEffect, useReducer } from 'react';

type State<T> = {
  data: T | null;
  isError: boolean;
  isFetching: boolean;
  errorMessage: string | null;
};

const initialState = {
  data: null,
  isFetching: false,
  isError: false,
  errorMessage: null,
};

const reducer = <T>(prev: State<T>, next: Partial<State<T>>) => ({
  ...prev,
  ...next,
});

export const useFetch = <T>(url: string) => {
  console.log('rendered');

  const [{ data, isError, isFetching, errorMessage }, setState] = useReducer(
    reducer,
    initialState as State<T>
  );

  const fetchData = async (url: string) => {
    try {
      setState({ isFetching: true });
      const response = await fetch(url);
      setState({ isFetching: false, data: await response.json() });
    } catch (e) {
      setState({
        isError: true,
        isFetching: false,
        errorMessage: (e as { message: string }).message,
      });
    }
  };

  useEffect(() => {
    (async () => {
      await fetchData(url);
    })();
  }, [url]);

  return { data, isError, isFetching, errorMessage };
};
