import { UserList } from './Components/UserList';
import { TodoList } from './Components/Todo/TodoList';
import { TodoForm } from './Components/Todo/TodoForm';
import { useRecoilState, useRecoilValue } from 'recoil';
import { TodoListFilterAtom, TodoListFiltered } from './store/TodoStore';
import TodoFilterEnum from './Enums/TodoFilterEnum';

function App() {
  const [filter, setFilter] = useRecoilState(TodoListFilterAtom);
  const list = useRecoilValue(TodoListFiltered);

  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 md:gap-8">
        <div className="p-4 border">
          <h1 className="mb-4 text-2xl font-bold text-center">Todos:</h1>
          <div className="flex flex-col justify-center gap-4 mb-4 lg:flex-row ">
            <TodoForm />

            <select
              name="todo-filter"
              className="px-4 py-2 capitalize border"
              value={filter}
              onChange={e => setFilter(e.target.value)}
            >
              <option value={TodoFilterEnum.All}>All</option>
              <option value={TodoFilterEnum.Completed}>Completed</option>
              <option value={TodoFilterEnum.NotCompleted}>Not Completed</option>
            </select>
          </div>

          <TodoList data={list} />
        </div>

        <div className="p-4 border">
          <h1 className="mb-4 text-2xl font-bold text-center">
            Users from api:
          </h1>

          <UserList />
        </div>
      </div>
    </div>
  );
}

export default App;
