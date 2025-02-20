import { style } from '@vanilla-extract/css';
import { sprinkles } from '../../styles/sprinkles.css';
import { vars } from '../../styles/vars.css';
import { breakPoints } from '../../styles/token';

export const containerStyle = style([
  sprinkles({
    width: 'full',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
  }),
  {
    height: 95,
    backgroundColor: vars.color.background,
    opacity: 0.85,
    top: 0,
    left: 0,
    zIndex: 10,
  },
]);

export const wrapStyle = style([
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

export const titleWrapStyle = style([
  sprinkles({
    textDecoration: 'none',
  }),
  {
    color: vars.color.base,
    fontSize: vars.fontSize.headingMedium,
    fontFamily: vars.fontFamily.base,
  },
]);

export const titleStyle = style({ fontFamily: vars.fontFamily.base });

export const boldTitleStyle = style({
  fontFamily: vars.fontFamily.heading,
  color: vars.color.primary,
});

export const anchorWrapStyle = sprinkles({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
});

export const anchorStyle = style([
  sprinkles({
    textDecoration: 'none',
  }),
  {
    fontFamily: vars.fontFamily.heading,
    fontSize: vars.fontSize.headingSmall,
    color: vars.color.base,
    ':hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
]);

export const resumeAnchorStyle = style([
  sprinkles({
    textDecoration: 'none',
  }),
  {
    fontFamily: vars.fontFamily.heading,
    fontSize: vars.fontSize.headingSmall,
    color: vars.color.secondary,
    ':hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
]);
