import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/vars.css';

export const dividerContainer = style({
  borderWidth: 0,
  borderTopWidth: 1,
  margin: 0,
  borderStyle: 'solid',
  color: vars.color.border,
});
