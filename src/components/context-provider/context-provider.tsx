import { TodosProvider } from '../../providers/todos-provider';
import { TodosPage } from './todos-page';

export const ContextProvider = () => {
  return (
    <TodosProvider>
      <TodosPage />
    </TodosProvider>
  );
};
