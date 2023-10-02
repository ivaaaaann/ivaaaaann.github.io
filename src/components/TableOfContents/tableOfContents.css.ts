import { style } from '@vanilla-extract/css';
import { sprinkles } from '../../styles/sprinkles.css';

export const tableOfContentsContainer = style([
  sprinkles({
    width: 'full',
    display: 'flex',
    flexDirection: 'column',
  }),
  {
    position: 'sticky',
    top: 10,
  },
]);
