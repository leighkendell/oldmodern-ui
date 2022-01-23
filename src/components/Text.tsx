import { ElementType, FC, forwardRef, HTMLAttributes } from 'react';
import { textStyles, TextVariants } from './Text.css';

export type TextProps = HTMLAttributes<HTMLParagraphElement> &
  TextVariants & { as?: ElementType<any> };

export const Text: FC<TextProps> = forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      children,
      size = 'medium',
      color = 'primary',
      weight = 'normal',
      as = 'p',
      className,
      ...props
    },
    ref
  ) => {
    const Component = as;

    return (
      <Component
        className={`${textStyles({ size, color, weight })} ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
