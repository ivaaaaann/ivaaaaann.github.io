import { style } from '@vanilla-extract/css';
import { sprinkles } from '../styles/sprinkles.css';
import { breakPoints } from '../styles/token';
import { vars } from '../styles/vars.css';

export const containerStyle = style([
  sprinkles({
    width: 'full',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
  style({
    minHeight: '100vh',
  }),
]);

export const wrapStyle = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'column',
    paddingY: 20,
  }),
  {
    paddingTop: 95,
    width: breakPoints['desktop'],
  },
]);
