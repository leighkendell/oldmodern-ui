import { ElementType, FC, forwardRef, HTMLAttributes } from 'react';
import { headingStyles, HeadingVariants } from './Heading.css';

export type HeadingLevels = 'h1' | 'h2' | 'h3';

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  HeadingVariants & { level: HeadingLevels } & { as?: ElementType<any> };

export const Heading: FC<HeadingProps> = forwardRef<
  HTMLHeadingElement,
  HeadingProps
>(
  (
    { children, color = 'primary', level = 'h1', as, className, ...props },
    ref
  ) => {
    const Component = as || level;

    return (
      <Component
        className={`${headingStyles({ color, level })} ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
