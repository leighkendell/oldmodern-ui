import { ElementType, FC, HTMLAttributes } from 'react';
import { headingStyles, HeadingVariants } from './Heading.css';

export type HeadingLevels = 'h1' | 'h2' | 'h3';

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  HeadingVariants & { level: HeadingLevels } & { as?: ElementType<any> };

export const Heading: FC<HeadingProps> = ({
  children,
  color = 'primary',
  level = 'h1',
  as,
  ...props
}) => {
  const Component = as || level;

  return (
    <Component className={headingStyles({ color, level })} {...props}>
      {children}
    </Component>
  );
};
