import { ITodoItem } from './Interfaces/ITodoItem';

export const replaceItemAtIndex = (
  arr: ITodoItem[],
  index: number,
  newValue: ITodoItem,
) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};
export const removeItemAtIndex = (arr: ITodoItem[], index: number) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};
