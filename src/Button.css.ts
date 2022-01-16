import { style, styleVariants } from '@vanilla-extract/css';
import { getSpace } from '.';
import { theme } from './theme.css';

const base = style({
  height: 40,
  paddingLeft: getSpace(2),
  paddingRight: getSpace(2),
  borderRadius: theme.radii.base,
  fontWeight: theme.fontWeights.bold,
  textTransform: 'uppercase',
  fontSize: theme.fontSizes.medium,
  cursor: 'pointer',
  border: '2px solid transparent',
  ':hover': {
    color: theme.colors.white,
    background: theme.colors.black,
  },
});

export const buttonStyles = styleVariants({
  filled: [
    base,
    {
      background: theme.colors.black,
      color: theme.colors.white,
      ':hover': {
        opacity: 0.5,
      },
    },
  ],
  outline: [
    base,
    {
      color: theme.colors.black,
      borderColor: theme.colors.black,
    },
  ],
  outlineLight: [
    base,
    {
      color: theme.colors.white,
      borderColor: theme.colors.white,
      ':hover': {
        color: theme.colors.black,
        background: theme.colors.white,
        borderColor: 'transparent',
      },
    },
  ],
});
