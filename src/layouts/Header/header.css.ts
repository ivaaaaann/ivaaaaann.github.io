import { style } from '@vanilla-extract/css';
import { sprinkles } from '../../styles/sprinkles.css';

export const containerStyle = style([
  sprinkles({
    width: 'full',
  }),
  {
    height: 95,
  },
]);
