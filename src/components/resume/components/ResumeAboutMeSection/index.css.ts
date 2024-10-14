import { style } from '@vanilla-extract/css';
import { sprinkles } from '../../../../styles/sprinkles.css';
import { vars } from '../../../../styles/vars.css';

export const resumeAboutMeSectionContainerStyle = style([
  sprinkles({
    width: 'full',
  }),
]);

export const resumeAboutMeSectionPreviewBoxStyle = style([
  sprinkles({
    width: 'full',
    padding: 20,
  }),
  {
    backgroundColor: vars.color.hover,
    borderRadius: vars.radius[4],
  },
]);
