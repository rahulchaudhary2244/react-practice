import { useFetch } from '../hooks/use-fetch';

type User = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const ExampleOfUseFetch = () => {
  const { data, errorMessage, isError, isFetching } = useFetch<User[]>(
    'https://jsonplaceholder.typicode.com/todos'
  );

  if (isError) {
    return <div>{errorMessage}</div>;
  }

  if (isFetching) {
    return <div>Fetching data...</div>;
  }

  return (
    <div>
      {data?.map(user => (
        <div key={user.id}>{user.title}</div>
      ))}
    </div>
  );
};
