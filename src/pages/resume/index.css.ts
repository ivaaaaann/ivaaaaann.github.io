import { style } from '@vanilla-extract/css';
import { sprinkles } from '../../styles/sprinkles.css';
import { breakPoints } from '../../styles/token';

export const resumeContainerStyle = style({
  minHeight: '100vh',
  backgroundColor: '#191919',
  paddingBottom: 60,
});

export const resumeWrapStyle = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'column',
  }),
  {
    width: breakPoints['desktop'],
  },
]);

export const resumeContentContainerStyle = sprinkles({
  paddingTop: 48,
});
