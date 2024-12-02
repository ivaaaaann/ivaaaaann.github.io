import { style } from '@vanilla-extract/css';
import { sprinkles } from '../../styles/sprinkles.css';
import { breakPoints } from '../../styles/token';
import { vars } from '../../styles/vars.css';

export const resumeContainerStyle = style({
  minHeight: '100vh',
  backgroundColor: '#191919',
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
