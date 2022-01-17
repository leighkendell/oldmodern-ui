import {
  createTheme,
  createThemeContract,
  globalStyle,
  style,
} from '@vanilla-extract/css';
import { mediaQueries } from '..';

export const [stackThemeClass, stackThemeVars] = createTheme({
  space: {
    initial: '0',
    small: '0',
    medium: '0',
    large: '0',
  },
});

export const stackStyles = style({
  display: 'block',
});

globalStyle(`${stackStyles} > *`, {
  marginTop: 0,
  marginBottom: 0,
});

globalStyle(`${stackStyles} > * + *`, {
  marginTop: stackThemeVars.space.initial,
  '@media': {
    [mediaQueries.small]: {
      marginTop: stackThemeVars.space.small,
    },
    [mediaQueries.medium]: {
      marginTop: stackThemeVars.space.medium,
    },
    [mediaQueries.large]: {
      marginTop: stackThemeVars.space.large,
    },
  },
});
