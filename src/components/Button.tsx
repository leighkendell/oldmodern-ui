import { ButtonHTMLAttributes, FC, forwardRef } from 'react';
import { buttonStyles } from './Button.css';

export type ButtonVariant = 'filled' | 'outline' | 'outlineLight';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ children, variant = 'filled', className, ...buttonProps }, ref) => {
  return (
    <button
      className={`${buttonStyles[variant]} ${className}`}
      ref={ref}
      {...buttonProps}
    >
      {children}
    </button>
  );
});
