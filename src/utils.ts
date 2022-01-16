import { calc } from '@vanilla-extract/css-utils';
import { theme } from '.';

export const getSpace = (amount: number) =>
  calc.multiply(theme.space.base, amount);
