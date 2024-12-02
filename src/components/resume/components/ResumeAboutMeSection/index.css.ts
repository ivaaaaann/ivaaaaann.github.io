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
    padding: 24,
  }),
  {
    backgroundColor: '#252525',
    borderRadius: vars.radius[4],
  },
]);
