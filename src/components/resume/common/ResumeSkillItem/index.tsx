import type { PropsWithChildren } from 'react';
import Flex from '../../../common/Flex';
import React from 'react';
import ResumeSkillItemSection from './Section';
import Txt from '../../../common/Txt';
import ResumeSkillItemGroup from './Group';
import { resumeSkillItemContainerStyle } from './index.css';
import ResumeSkillItemContent from './Content';
import ResumeSkillItemPrincipal from './Principal';

const ResumeSkillItemBase = ({ children }: PropsWithChildren) => {
  return (
    <Flex as="aside" gap={96} className={resumeSkillItemContainerStyle}>
      {children}
    </Flex>
  );
};

export const ResumeSkillItem = Object.assign(ResumeSkillItemBase, {
  Section: ResumeSkillItemSection,
  Group: ResumeSkillItemGroup,
  Content: ResumeSkillItemContent,
  Principal: ResumeSkillItemPrincipal,
});
