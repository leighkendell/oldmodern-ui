import { createGlobalTheme } from '@vanilla-extract/css';

const BASE_SPACE = '8px';

const breakpoints = ['40em', '52em', '64em'];

export const theme = createGlobalTheme(':root', {
  colors: {
    black: '#000',
    white: '#fff',
    cream: '#f9f4ea',
  },
  fonts: {
    heading: `'DM Serif Display', serif`,
    body: `'DM Sans', sans-serif`,
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  fontSizes: {
    small: '0.75rem', // 12px
    medium: '0.875rem', // 14px
    base: '1rem', // 16px
  },
  space: {
    base: BASE_SPACE,
  },
  radii: {
    base: BASE_SPACE,
  },
});

export const mediaQueries = {
  small: `screen and (min-width: ${breakpoints[0]})`,
  medium: `screen and (min-width: ${breakpoints[1]})`,
  large: `screen and (min-width: ${breakpoints[2]})`,
};
