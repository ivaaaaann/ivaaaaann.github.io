import type { ReactNode } from 'react';
import Flex from '../../../../common/Flex';
import React from 'react';
import Convert from '../../../../common/util/Convert';
import Txt from '../../../../common/Txt';

type Props = {
  title?: ReactNode;
  descriptions?: ReactNode[];
};

const ResumeWorkExperienceItemGroupOverview = ({ title, descriptions }: Props) => {
  return (
    <Flex direction="column" gap={16}>
      <Convert
        value={title}
        formatter={(value) => (
          <Txt as="h4" size="headingMedium" family="heading" color="gray200">
            {value}
          </Txt>
        )}
      />
      <Convert
        value={descriptions}
        formatter={(descriptions) => (
          <Flex direction="column" gap={8}>
            {descriptions.map((description, index) => (
              <Txt key={index} size="contentLarge" lineHeight="xxlarge" color="gray200">
                {description}
              </Txt>
            ))}
          </Flex>
        )}
      />
    </Flex>
  );
};

export default ResumeWorkExperienceItemGroupOverview;
