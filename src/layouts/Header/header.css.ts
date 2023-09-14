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
  },
]);

export const wrapStyle = style([
  sprinkles({
    height: 'full',
    display: 'flex',
    alignItems: 'center',
  }),
  {
    width: breakPoints['desktop'],
  },
]);

export const textStyle = sprinkles({
  fontFamily: 'base',
});
