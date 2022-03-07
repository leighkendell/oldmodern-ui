import { ButtonHTMLAttributes, ElementType, FC, forwardRef } from 'react';
import { buttonStyles } from './Button.css';

export type ButtonVariant = 'filled' | 'outline' | 'outlineLight';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  as?: ElementType<any>;
}

export const Button: FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    { children, variant = 'filled', className, as = 'button', ...buttonProps },
    ref
  ) => {
    const Component = as;

    return (
      <Component
        className={`${buttonStyles[variant]} ${className}`}
        ref={ref}
        {...buttonProps}
      >
        {children}
      </Component>
    );
  }
);
