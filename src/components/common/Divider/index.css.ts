import { createVar, style } from '@vanilla-extract/css';

export const dividerColor = createVar();

export const dividerContainer = style({
  borderWidth: 0,
  borderTopWidth: 1,
  margin: 0,
  borderStyle: 'solid',
  color: dividerColor,
});
