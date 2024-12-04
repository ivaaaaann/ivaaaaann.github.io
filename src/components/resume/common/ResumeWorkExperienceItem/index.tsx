import React, { type PropsWithChildren } from 'react';
import Flex from '../../../common/Flex';
import ResumeWorkExperienceItemDivider from './Divider';
import { ResumeWorkExperienceItemGroup } from './Group';
import ResumeWorkExperienceItemDescription from './Description';
import ResumeWorkExperienceItemSection from './Section';
import ResumeWorkExperienceItemContent from './ResumeWorkExperienceItemContent';

const ResumeWorkExperienceItemBase = ({ children }: PropsWithChildren) => {
  return (
    <Flex justify="space-between" gap={96}>
      {children}
    </Flex>
  );
};

export const ResumeWorkExperienceItem = Object.assign(ResumeWorkExperienceItemBase, {
  Section: ResumeWorkExperienceItemSection,
  Content: ResumeWorkExperienceItemContent,
  Description: ResumeWorkExperienceItemDescription,
  Divider: ResumeWorkExperienceItemDivider,
  Group: ResumeWorkExperienceItemGroup,
});
