import { ITodoItem } from '../../Interfaces/ITodoItem';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  data: ITodoItem[];
}

export const TodoList = ({ data }: TodoListProps) => {
  if (!data.length)
    return <p className="mb-4 font-bold text-center">nothing is here</p>;

  return (
    <ol className="mx-auto space-y-2 lg:max-w-md">
      {data.map(item => {
        return <TodoItem key={item.id} item={item} />;
      })}
    </ol>
  );
};
