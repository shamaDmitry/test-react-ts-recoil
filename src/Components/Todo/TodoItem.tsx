import classNames from 'classnames';
import { TodoListAtom } from '../../store/TodoStore';
import { useRecoilState } from 'recoil';
import { ITodoItem } from '../../Interfaces/ITodoItem';
import { removeItemAtIndex, replaceItemAtIndex } from '../../helpers';
import Button from '../atoms/Button';
import { Cross } from '../icons/Cross';

interface TodoProps {
  item: ITodoItem;
}

export const TodoItem = ({ item }: TodoProps) => {
  const [list, setList] = useRecoilState(TodoListAtom);
  const index = list.findIndex(listItem => listItem === item);

  return (
    <li key={item.id} className="flex">
      <div className="flex items-center flex-1 gap-4">
        <span className="flex gap-x-2">
          <span>{index + 1}.</span>

          <input
            type="checkbox"
            name={item.id}
            checked={item.isCompleted}
            onChange={() => {
              const newList = replaceItemAtIndex(list, index, {
                ...item,
                isCompleted: !item.isCompleted,
              });

              setList(newList);
            }}
          />
        </span>

        <span
          className={classNames({
            'flex-1 border-b-2 border-b-gray-300': true,
            'line-through': item.isCompleted,
          })}
        >
          {item.text}
        </span>

        <Button
          variant="danger"
          onClick={() => {
            const newList = removeItemAtIndex(list, index);

            setList(newList);
          }}
        >
          <Cross className="w-3 h-3" />
        </Button>
      </div>
    </li>
  );
};
