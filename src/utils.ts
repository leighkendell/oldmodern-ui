import { calc } from '@vanilla-extract/css-utils';
import { theme } from './theme.css';

export const getSpace = (amount: number) =>
  calc.multiply(theme.space.base, amount);
