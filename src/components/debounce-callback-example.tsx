import { useState } from 'react';
import { useDebounce } from '../hooks/use-debounce';

type User = {
  id: number;
  firstName: string;
  lastName: string;
};

export const DebounceCallbackExample = () => {
  const [searchKey, setSearchKey] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const response = await fetch(
      'https://dummyjson.com/users/search?q=' + searchKey
    );
    const data = await response.json();
    setUsers(data.users as User[]);
  };

  useDebounce(fetchUsers, 2000, [searchKey]);

  return (
    <div className="m-8">
      <input
        className="border p-2"
        type="text"
        value={searchKey}
        placeholder="Enter search key here"
        onChange={e => setSearchKey(e.target.value)}
      />
      <div>
        {users.map(user => (
          <div key={user.id}>
            {user.firstName} {user.lastName}
          </div>
        ))}
      </div>
    </div>
  );
};
