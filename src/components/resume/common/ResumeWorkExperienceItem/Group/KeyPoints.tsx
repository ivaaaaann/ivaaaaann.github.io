import type { ReactNode } from 'react';
import Flex from '../../../../common/Flex';
import React from 'react';
import Txt from '../../../../common/Txt';

type Props = {
  keyPoints: ReactNode[];
  hideTitle?: boolean;
};

const ResumeWorkExperienceItemGroupKeyPoints = ({ keyPoints, hideTitle = false }: Props) => {
  return (
    <Flex direction="column" gap={16}>
      {hideTitle === false && (
        <Txt as="h4" size="headingMedium" family="heading" color="gray200">
          주요 업무
        </Txt>
      )}
      <Flex direction="column" gap={12}>
        {keyPoints.map((keyPoint, index) => (
          <Flex gap={12} key={index}>
            <Txt size="headingMedium" lineHeight="xxlarge" color="gray200">
              •
            </Txt>
            <Txt size="contentLarge" lineHeight="xxlarge" color="gray200">
              {keyPoint}
            </Txt>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default ResumeWorkExperienceItemGroupKeyPoints;
