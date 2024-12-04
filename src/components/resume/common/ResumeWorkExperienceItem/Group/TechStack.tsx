import React, { type ReactNode } from 'react';
import Flex from '../../../../common/Flex';
import Txt from '../../../../common/Txt';
import {
  resumeWorkExperienceItemGorupTechStackContainerStyle,
  resumeWorkExperienceItemGorupTechStackLabelStyle,
} from './index.css';

const ResumeWorkExperienceItemTechStack = ({ techStack }: { techStack: ReactNode[] }) => {
  return (
    <Flex
      gap={6}
      align="center"
      wrap="wrap"
      className={resumeWorkExperienceItemGorupTechStackContainerStyle}
    >
      <Txt size="contentLarge" color="gray200">
        <Flex align="center" gap={6}>
          <span className={resumeWorkExperienceItemGorupTechStackLabelStyle}>Tech Stacks</span>
          <span>|</span>
        </Flex>
      </Txt>
      {techStack.map((tech, index) => (
        <Txt key={index} size="contentLarge" color="gray200">
          {tech}
          {index !== techStack.length - 1 && ','}
        </Txt>
      ))}
    </Flex>
  );
};

export default ResumeWorkExperienceItemTechStack;
