import { style, styleVariants } from '@vanilla-extract/css';
import { getSpace } from '../utils';
import { createTextStyle } from '@capsizecss/vanilla-extract';
import fontMetrics from '@capsizecss/metrics/dMSans';
import { theme } from '../theme.css';

export const text = createTextStyle({
  fontSize: 14,
  leading: 16,
  fontMetrics,
});

const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  appearance: 'none',
  height: 40,
  paddingLeft: getSpace(2),
  paddingRight: getSpace(2),
  borderRadius: theme.radii.base,
  fontFamily: theme.fonts.body,
  fontWeight: theme.fontWeights.bold,
  textTransform: 'uppercase',
  cursor: 'pointer',
  border: '2px solid transparent',
  textAlign: 'center',
  background: 'transparent',
  textDecoration: 'none',
  ':hover': {
    color: theme.colors.white,
    background: theme.colors.black,
  },
});

export const buttonStyles = styleVariants({
  filled: [
    base,
    text,
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
    text,
    {
      color: theme.colors.black,
      borderColor: theme.colors.black,
    },
  ],
  outlineLight: [
    base,
    text,
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
