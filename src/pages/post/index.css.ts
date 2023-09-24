import { style } from '@vanilla-extract/css';
import { sprinkles } from '../../styles/sprinkles.css';

export const contentContainerStyle = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'column',
  }),
  {
    width: 700,
  },
]);
