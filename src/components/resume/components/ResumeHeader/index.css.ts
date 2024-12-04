import { style } from '@vanilla-extract/css';
import { sprinkles } from '../../../../styles/sprinkles.css';
import { vars } from '../../../../styles/vars.css';
import { breakPoints } from '../../../../styles/token';

export const resumeHeaderContainerStyle = style([
  sprinkles({
    width: 'full',
    display: 'flex',
    justifyContent: 'center',
  }),
  {
    height: 95,
    opacity: 0.85,
    top: 0,
    left: 0,
    zIndex: 10,
  },
]);

export const resumeHeaderNavStyle = style([
  sprinkles({
    height: 'full',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
  {
    width: breakPoints['desktop'],
  },
]);

export const resumeHeaderTitleBoldTextStyle = style({
  color: vars.color.secondary,
});

export const resumeHeaderAnchorStyle = style({
  color: vars.color.white,
  ':hover': {
    textDecoration: 'underline',
    cursor: 'pointer',
  },
});
