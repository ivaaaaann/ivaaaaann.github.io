import { globalStyle } from '@vanilla-extract/css';
import { vars } from './vars.css';

globalStyle('html, body', {
  margin: 0,
  backgroundColor: vars.color.background,
  fontFamily: 'Pretendard, -apple-system, sans-serif',
});
