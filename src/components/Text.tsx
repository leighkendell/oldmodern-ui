import { ElementType, FC, HTMLAttributes } from 'react';
import { textStyles, TextVariants } from './Text.css';

export type TextProps = HTMLAttributes<HTMLParagraphElement> &
  TextVariants & { as?: ElementType<any> };

export const Text: FC<TextProps> = ({
  children,
  size = 'medium',
  color = 'primary',
  weight = 'normal',
  as = 'p',
  ...props
}) => {
  const Component = as;

  return (
    <Component className={textStyles({ size, color, weight })} {...props}>
      {children}
    </Component>
  );
};
