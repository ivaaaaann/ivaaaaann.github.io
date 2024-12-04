import React, { type ReactNode } from 'react';
import Flex from '../../../../common/Flex';
import { resumeSkillItemSectionContainer } from './index.css';
import Txt from '../../../../common/Txt';
import Convert from '../../../../common/util/Convert';

type Props = {
  title: ReactNode;
};

const ResumeSkillItemSection = ({ title }: Props) => {
  return (
    <Flex as="aside" direction="column" gap={16} className={resumeSkillItemSectionContainer}>
      <Txt as="h3" size="titleLarge" family="heading" color="gray200">
        {title}
      </Txt>
    </Flex>
  );
};

export default ResumeSkillItemSection;
