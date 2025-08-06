import { useEffect } from 'react';
import {
  useTodosApi,
  useTodosData,
  type Todo,
} from '../../providers/todos-provider';

export const TodosPage = () => {
  const { setTodos } = useTodosApi();
  const { todos, total } = useTodosData();

  const fetchTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = (await response.json()) as Todo[];
    setTodos({ todos: data, total: data.length });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <p>total: {total}</p>
      {todos.map(todo => (
        <div key={todo.id}>
          {todo.title} completed:{todo.completed}
        </div>
      ))}
    </div>
  );
};
