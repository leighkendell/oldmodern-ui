import { CSSProperties, FC, HTMLAttributes } from 'react';
import { theme } from '.';
import { textStyles, TextVariants } from './Text.css';

export type TextProps = HTMLAttributes<HTMLParagraphElement> & TextVariants;

export const Text: FC<TextProps> = ({
  children,
  size = 'medium',
  ...paraProps
}) => {
  return (
    <p className={textStyles({ size })} {...paraProps}>
      {children}
    </p>
  );
};
