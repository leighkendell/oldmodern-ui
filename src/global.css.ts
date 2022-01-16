import { globalStyle } from '@vanilla-extract/css';
import { theme } from '.';

globalStyle('html, body', {
  margin: 0,
  fontFamily: theme.fonts.body,
});
