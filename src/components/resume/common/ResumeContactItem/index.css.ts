import { style } from '@vanilla-extract/css';
import { vars } from '../../../../styles/vars.css';
import { sprinkles } from '../../../../styles/sprinkles.css';

export const resumeContactItemKeyStyle = style([
  sprinkles({
    paddingX: 2,
  }),
  {
    backgroundColor: vars.color.primary,
    color: vars.color.white,
  },
]);

export const resumeContactItemKeyLinkStyle = style({
  textDecoration: 'underline',
  color: vars.color.gray400,
});
