import { style } from '@vanilla-extract/css';
import { sprinkles } from '../../styles/sprinkles.css';

export const sectionContainerStyle = sprinkles({
  width: 'full',
  display: 'flex',
  gap: 20,
  position: 'relative',
});

export const contentContainerStyle = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'column',
  }),
  {
    width: 700,
    minWidth: 700,
  },
]);
