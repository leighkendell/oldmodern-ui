import { style } from '@vanilla-extract/css';
import { getSpace, theme } from '..';

export const input = style({
  border: `1px solid ${theme.colors.black}`,
  height: 40,
  borderRadius: theme.radii.base,
  fontFamily: theme.fonts.body,
  padding: `0 ${getSpace(2)}`,
  marginTop: getSpace(1),
});
