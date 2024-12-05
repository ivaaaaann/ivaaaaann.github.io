import { style } from '@vanilla-extract/css';
import { sprinkles } from '../styles/sprinkles.css';
import { vars } from '../styles/vars.css';

export const heroWrapStyle = sprinkles({
  position: 'relative',
});

export const homeHeroStyle = style({
  filter: 'brightness(60%)',
});

export const heroTitleStyle = style([
  sprinkles({
    position: 'absolute',
    marginY: 0,
  }),
  {
    fontWeight: vars.fontFamily.base,
    color: vars.color.white,
    bottom: 20,
    left: 20,
    fontSize: vars.fontSize.contentLarge,
    lineHeight: vars.lineHeight.xxlarge,
  },
]);
