import { createVar, style } from '@vanilla-extract/css';
import { sprinkles } from '../../../../styles/sprinkles.css';
import { vars } from '../../../../styles/vars.css';

export const resumeWorkExperienceItemSectionContainer = style({
  minWidth: 180,
});

export const resumeWorkExperienceItemDescriptionContainer = sprinkles({
  paddingY: 8,
});

export const resumeWorkExperienceItemPerformanceContainerGap = createVar();

export const resumeWorkExperienceItemPerformanceContainer = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  }),
  style({
    marginLeft: resumeWorkExperienceItemPerformanceContainerGap,
  }),
]);

export const resumeWorkExperienceItemTechStackContainer = sprinkles({
  paddingY: 8,
});

export const resumeWorkExperienceItemTechStackLabel = style([
  sprinkles({
    paddingX: 2,
  }),
  {
    height: vars.lineHeight.xlarge,
    backgroundColor: vars.color.primary,
    color: vars.color.white,
  },
]);