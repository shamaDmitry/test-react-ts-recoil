import { atom, selector } from 'recoil';
import TodoFilterEnum from '../Enums/TodoFilterEnum';
import { ITodoItem } from '../Interfaces/ITodoItem';

const TodoListAtom = atom<ITodoItem[]>({
  key: 'TodoList',
  default: [],
});

const TodoListFilterAtom = atom({
  key: 'TodoListFilterAtom',
  default: TodoFilterEnum.All as string,
});

const TodoListFiltered = selector({
  key: 'TodoListFiltered',
  get: ({ get }) => {
    const filter = get(TodoListFilterAtom);
    const list: ITodoItem[] = get(TodoListAtom);

    switch (filter) {
      case TodoFilterEnum.Completed:
        return list.filter(item => item.isCompleted);

      case TodoFilterEnum.NotCompleted:
        return list.filter(item => !item.isCompleted);

      default:
        return list;
    }
  },
});

export { TodoListAtom, TodoListFilterAtom, TodoListFiltered };
