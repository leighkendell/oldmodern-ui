import { ElementType, FC, HTMLAttributes } from 'react';
import { getSpace } from '..';
import { stackStyles, stackThemeClass, stackThemeVars } from './Stack.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

const defaults = {
  initial: 0,
  small: 0,
  medium: 0,
  large: 0,
};

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  space?: Partial<typeof defaults> | number;
  as?: ElementType<any>;
}

export const Stack: FC<StackProps> = ({
  children,
  space = defaults,
  as = 'div',
  className,
  ...props
}) => {
  const Component = as;

  let baseValues = defaults;

  // Grab the passed in space values and set up defaults for each media query (falling back to previous value if undefined)
  if (typeof space === 'number') {
    baseValues = {
      initial: space,
      small: space,
      medium: space,
      large: space,
    };
  } else {
    baseValues = {
      initial: space.initial || defaults.initial,
      small: space.small || space.initial || defaults.small,
      medium: space.medium || space.small || space.initial || defaults.medium,
      large:
        space.large ||
        space.medium ||
        space.small ||
        space.initial ||
        defaults.large,
    };
  }

  // Get the actual variable values for each item in the space object
  const spaceVars = Object.fromEntries(
    Object.entries(baseValues).map(([key, value]) => [key, getSpace(value)])
  ) as typeof stackThemeVars['space'];

  return (
    <Component
      className={`${stackThemeClass} ${stackStyles} ${className}`}
      style={assignInlineVars(stackThemeVars, {
        space: spaceVars,
      })}
      {...props}
    >
      {children}
    </Component>
  );
};
