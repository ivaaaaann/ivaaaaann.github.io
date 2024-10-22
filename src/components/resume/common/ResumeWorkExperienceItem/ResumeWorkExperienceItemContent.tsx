import React, { type PropsWithChildren, type ReactNode } from 'react';
import Flex from '../../../common/Flex';
import { convert } from '../../../../utils/functions/convert';
import Txt from '../../../common/Txt';
import { css } from '@emotion/css';
import {
  resumeWorkExperienceItemDescriptionContainer,
  resumeWorkExperienceItemPerformanceContainer,
  resumeWorkExperienceItemPerformanceContainerGap,
  resumeWorkExperienceItemTechStackContainer,
  resumeWorkExperienceItemTechStackLabel,
} from './index.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { joinNodes } from '../../../../utils/functions/joinNodes';

const ResumeWorkExperienceItemContentBase = ({ children }: PropsWithChildren) => {
  return (
    <Flex direction="column" gap={10}>
      {children}
    </Flex>
  );
};

type PerformanceItem = {
  items: ReactNode[];
  children?: PerformanceItem[];
};

type PerformanceProps = {
  performances: PerformanceItem[];
};

const Performances = ({ performances }: PerformanceProps) => {
  const getPerformaces = (performances: PerformanceItem[], depth?: number) => {
    const convertedDepth = depth ?? 0;

    return performances.map((performance) => {
      return (
        <ul>
          <div
            className={resumeWorkExperienceItemPerformanceContainer}
            style={assignInlineVars({
              [resumeWorkExperienceItemPerformanceContainerGap]: `${convertedDepth * 20}px`,
            })}
          >
            <Txt lineHeight="xlarge">
              <li>{performance.items.map((item) => item)}</li>
            </Txt>
            {convert(performance.children, (children) =>
              getPerformaces(children, convertedDepth + 1),
            )}
          </div>
        </ul>
      );
    });
  };

  return (
    <Flex direction="column" gap={8}>
      {getPerformaces(performances)}
    </Flex>
  );
};

const Description = ({ children }: PropsWithChildren) => {
  return (
    <Txt lineHeight="xlarge" className={resumeWorkExperienceItemDescriptionContainer}>
      {children}
    </Txt>
  );
};

type TechStacksProps = {
  items: ReactNode[];
};

const TechStacks = ({ items }: TechStacksProps) => {
  return (
    <Flex className={resumeWorkExperienceItemTechStackContainer} gap={8}>
      <Txt whiteSpace="nowrap" className={resumeWorkExperienceItemTechStackLabel}>
        Tech Stacks |
      </Txt>
      <Txt lineHeight="xlarge">{joinNodes(items, ', ')}</Txt>
    </Flex>
  );
};

export const ResumeWorkExperienceItemContent = Object.assign(ResumeWorkExperienceItemContentBase, {
  Description,
  Performances,
  TechStacks,
});
