import type { PropsWithChildren } from 'react';
import Flex from '../../../../common/Flex';
import React from 'react';
import ResumeWorkExperienceItemGroupOverview from './Overview';
import { resumeWorkExperienceItemGroupContainerStyle } from './index.css';
import ResumeWorkExperienceItemGroupKeyPoints from './KeyPoints';
import ResumeWorkExperienceItemTechStack from './TechStack';

const ResumeWorkExperienceItemGroupBase = ({ children }: PropsWithChildren) => {
  return (
    <Flex
      as="section"
      direction="column"
      gap={24}
      className={resumeWorkExperienceItemGroupContainerStyle}
    >
      {children}
    </Flex>
  );
};

export const ResumeWorkExperienceItemGroup = Object.assign(ResumeWorkExperienceItemGroupBase, {
  Overview: ResumeWorkExperienceItemGroupOverview,
  KeyPoints: ResumeWorkExperienceItemGroupKeyPoints,
  TechStack: ResumeWorkExperienceItemTechStack,
});
