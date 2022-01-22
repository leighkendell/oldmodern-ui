import { ButtonHTMLAttributes, FC } from 'react';
import { buttonStyles } from './Button.css';

export type ButtonVariant = 'filled' | 'outline' | 'outlineLight';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'filled',
  className,
  ...buttonProps
}) => {
  return (
    <button
      className={`${buttonStyles[variant]} ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
