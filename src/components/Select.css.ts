import { style } from '@vanilla-extract/css';
import { getSpace, theme } from '..';

export const select = style({
  position: 'relative',
  border: `1px solid ${theme.colors.black}`,
  height: 40,
  borderRadius: theme.radii.base,
  fontFamily: theme.fonts.body,
  padding: `0 ${getSpace(2)}`,
  marginTop: getSpace(1),
  width: '100%',
  appearance: 'none',
  backgroundImage: `linear-gradient(45deg, transparent 50%, ${theme.colors.black} 50%),
  linear-gradient(135deg, ${theme.colors.black} 50%, transparent 50%)`,
  backgroundPosition: `calc(100% - 22px) 50%,
  calc(100% - 16px) 50%`,
  backgroundSize: `6px 6px,
  6px 6px`,
  backgroundRepeat: 'no-repeat',
});
