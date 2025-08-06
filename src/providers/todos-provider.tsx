import {
  createContext,
  use,
  useReducer,
  type ActionDispatch,
  type PropsWithChildren,
} from 'react';

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type State = { todos: Todo[]; total: number };
type Dispatch = ActionDispatch<[newState: Partial<State>]>;

const reducer = (prevState: State, newState: Partial<State>): State => {
  return { ...prevState, ...newState };
};

const INITIAL_STATE = { todos: [], total: 0 };

const DataContext = createContext<State | undefined>(undefined);
const ApiContext = createContext<Dispatch | undefined>(undefined);

export const TodosProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <ApiContext.Provider value={dispatch}>
      <DataContext.Provider value={state}>{children}</DataContext.Provider>
    </ApiContext.Provider>
  );
};

export const useTodosData = () => {
  const state = use(DataContext);

  if (state === undefined)
    throw new Error('useTodosData must be used within TodosProvider');

  return state;
};

export const useTodosApi = () => {
  const dispatch = use(ApiContext);

  if (dispatch === undefined)
    throw new Error('useTodosApi must be used within TodosProvider');

  const setTodos = (payload: Partial<State>) => {
    dispatch({ ...payload });
  };

  const resetTodos = () => {
    dispatch({ ...INITIAL_STATE });
  };

  return { setTodos, resetTodos };
};
