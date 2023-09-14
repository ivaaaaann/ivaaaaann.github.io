import { globalStyle } from '@vanilla-extract/css';
import { vars } from './vars.css';
import { fonts } from './token';

globalStyle('html, body', {
  margin: 0,
  backgroundColor: vars.color.background,
  fontFamily: `${fonts.base}, -apple-system, sans-serif`,
});
