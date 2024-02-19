import { v4 as uuidv4 } from 'uuid';
import TodoFilterEnum from '../Enums/TodoFilterEnum';

export const FilterSelectData = [
  {
    id: uuidv4(),
    value: TodoFilterEnum.All,
    text: 'all',
  },
  {
    id: uuidv4(),
    value: TodoFilterEnum.Completed,
    text: 'completed',
  },
  {
    id: uuidv4(),
    value: TodoFilterEnum.NotCompleted,
    text: 'not completed',
  },
];
