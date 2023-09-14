import { style } from '@vanilla-extract/css';
import { sprinkles } from '../styles/sprinkles.css';
import { breakPoints } from '../styles/token';
import { vars } from '../styles/vars.css';

export const containerStyle = sprinkles({
  width: 'full',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const wrapStyle = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'column',
  }),
  {
    width: breakPoints['desktop'],
  },
]);
