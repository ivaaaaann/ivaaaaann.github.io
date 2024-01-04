import { style } from '@vanilla-extract/css';
import { sprinkles } from '../../styles/sprinkles.css';
import { breakPoints } from '../../styles/token';

export const containerStyle = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 20,
    boxSizing: 'border-box',
  }),
  {
    width: breakPoints['desktop'],
  },
]);
