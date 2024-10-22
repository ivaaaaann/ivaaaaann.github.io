import React, { type PropsWithChildren } from 'react';
import Flex from '../../../common/Flex';
import ResumeWorkExperienceItemSection from './ResumeWorkExperienceItemSection';
import { ResumeWorkExperienceItemContent } from './ResumeWorkExperienceItemContent';

const ResumeWorkExperienceItemBase = ({ children }: PropsWithChildren) => {
  return (
    <Flex justify="space-between" gap={80}>
      {children}
    </Flex>
  );
};

export const ResumeWorkExperienceItem = Object.assign(ResumeWorkExperienceItemBase, {
  Section: ResumeWorkExperienceItemSection,
  Content: ResumeWorkExperienceItemContent,
});
