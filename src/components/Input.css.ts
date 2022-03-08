import { style } from '@vanilla-extract/css';
import { getSpace, theme } from '..';

export const input = style({
  border: `1px solid ${theme.colors.black}`,
  height: 40,
  borderRadius: theme.radii.base,
  fontFamily: theme.fonts.body,
  padding: `0 ${getSpace(2)}`,
  marginTop: getSpace(1),
  width: '100%',
  backgroundColor: theme.colors.white,
  color: theme.colors.black,
  WebkitAppearance: 'none',
  selectors: {
    'textarea&': {
      padding: getSpace(2),
      height: 'auto',
      minHeight: 200,
    },
  },
});
