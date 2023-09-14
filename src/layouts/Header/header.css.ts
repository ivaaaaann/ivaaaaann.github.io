import { style } from '@vanilla-extract/css';
import { sprinkles } from '../../styles/sprinkles.css';
import { vars } from '../../styles/vars.css';
import { breakPoints } from '../../styles/token';

export const containerStyle = style([
  sprinkles({
    width: 'full',
    display: 'flex',
    justifyContent: 'center',
  }),
  {
    height: 95,
    borderBottom: `1px solid ${vars.color.border}`,
    backgroundColor: vars.color.background,
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
    fontFamily: 'base',
    textDecoration: 'none',
  }),
  { color: vars.color.base, fontSize: vars.fontSize.xxlarge },
]);

export const titleStyle = sprinkles({
  fontFamily: 'base',
});

export const boldTitleStyle = sprinkles({
  fontFamily: 'heading',
});

export const anchorWrapStyle = sprinkles({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
});

export const anchorStyle = style([
  sprinkles({
    fontFamily: 'heading',
    textDecoration: 'none',
  }),
  {
    fontSize: vars.fontSize.xlarge,
    color: vars.color.base,
    ':hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
]);
