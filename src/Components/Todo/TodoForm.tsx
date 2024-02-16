import { useSetRecoilState } from 'recoil';
import { TodoListAtom } from '../../store/TodoStore';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Button from '../atoms/Button';

export const TodoForm = () => {
  const [input, setInput] = useState('');
  const setTodoList = useSetRecoilState(TodoListAtom);

  const submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (input.length) {
      const body = {
        id: uuidv4(),
        text: input,
        isCompleted: false,
      };

      setTodoList(prevState => {
        return [...prevState, body];
      });
      setInput('');
    }
  };
  return (
    <form className="flex items-center justify-center" onSubmit={submitForm}>
      <input
        name="todo-text"
        value={input}
        onChange={e => setInput(e.target.value)}
        type="text"
        placeholder="add todo"
        className="self-stretch w-full px-4 py-2 border outline-none"
      />

      <Button type="submit" variant="success">
        add todo
      </Button>
    </form>
  );
};
