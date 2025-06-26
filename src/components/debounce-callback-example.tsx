import { useState, type ChangeEvent } from 'react';
import { useDebounce } from '../hooks/use-debounce';

export const DebounceCallbackExample = () => {
  const [searchKey, setSearchKey] = useState('');

  const debounceFetch = () => {
    console.log({ searchKey });
  };

  useDebounce(debounceFetch, 500, [searchKey]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKey(e.target.value);
  };

  return (
    <div className="m-2">
      <input
        className="border p-2"
        type="text"
        value={searchKey}
        placeholder="Enter search key here"
        onChange={handleChange}
      />
    </div>
  );
};
