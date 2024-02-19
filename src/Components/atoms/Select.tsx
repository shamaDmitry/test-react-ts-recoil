import { ChangeEventHandler } from 'react';
import { IFilterSelectItem } from '../../Interfaces/IFilterSelectItem';

type SelectProps = {
  value: string | number;
  onChange: ChangeEventHandler;
  options: IFilterSelectItem[];
};

export const Select = ({ value, onChange, options }: SelectProps) => {
  console.log(options);

  return (
    <select
      name="todo-filter"
      className="px-4 py-2 capitalize border"
      value={value}
      onChange={onChange}
    >
      {options.map(option => {
        <option key={option.id} value={option.value}>
          {option.text}
        </option>;
      })}
    </select>
  );
};
