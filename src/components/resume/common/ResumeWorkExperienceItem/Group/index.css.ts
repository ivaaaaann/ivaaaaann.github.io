import { style } from '@vanilla-extract/css';
import { sprinkles } from '../../../../../styles/sprinkles.css';
import { vars } from '../../../../../styles/vars.css';

export const resumeWorkExperienceItemGroupContainerStyle = sprinkles({
  marginTop: 16,
  marginBottom: 8,
});

export const resumeWorkExperienceItemGorupTechStackContainerStyle = style({
  marginTop: 24,
});

export const resumeWorkExperienceItemGorupTechStackLabelStyle = style({
  backgroundColor: vars.color.primary,
});
