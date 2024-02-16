import classNames from 'classnames';
import React, { MouseEventHandler, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<{
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?: 'danger' | 'primary' | 'success';
  onClick?: MouseEventHandler;
}>;

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = 'primary',
  className,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(`${className}`, {
        'p-3 border flex items-center justify-center whitespace-nowrap': true,
        'bg-red-500 text-white': variant === 'danger',
        'bg-blue-500 text-white': variant === 'primary',
        'bg-green-500 text-white': variant === 'success',
      })}
    >
      {children}
    </button>
  );
};

export default Button;
