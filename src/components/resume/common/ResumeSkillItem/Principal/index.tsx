import type { ReactNode } from 'react';
import Flex from '../../../../common/Flex';
import Txt from '../../../../common/Txt';
import React from 'react';

type Props = {
  title: ReactNode;
  descriptions: ReactNode[];
};

const ResumeSkillItemPrincipal = ({ title, descriptions }: Props) => {
  return (
    <Flex as="section" direction="column" gap={16}>
      <Txt as="h4" size="headingMedium" family="heading" color="gray200">
        {title}
      </Txt>
      <Flex direction="column" gap={12}>
        {descriptions.map((description, index) => (
          <Flex gap={12} key={index}>
            <Txt size="headingMedium" lineHeight="xxlarge" color="gray200">
              •
            </Txt>
            <Txt size="contentLarge" lineHeight="xxlarge" color="gray200">
              {description}
            </Txt>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default ResumeSkillItemPrincipal;
