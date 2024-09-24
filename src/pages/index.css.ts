import { style } from '@vanilla-extract/css';
import { sprinkles } from '../styles/sprinkles.css';
import { vars } from '../styles/vars.css';

export const heroWrapStyle = sprinkles({
  position: 'relative',
});

export const heroTitleStyle = style([
  sprinkles({
    fontFamily: 'base',
    position: 'absolute',
    marginY: 0,
  }),
  {
    color: vars.color.white,
    bottom: 20,
    left: 20,
    fontSize: vars.fontSize.large,
    lineHeight: vars.lineHeight.xxlarge,
  },
]);
