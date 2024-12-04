import React, { type ReactNode } from 'react';
import Flex from '../../../../common/Flex';
import Txt from '../../../../common/Txt';
import { joinNodes } from '../../../../../utils/functions/joinNodes';

type Props = {
  items: ReactNode[][];
};

const ResumeSkillItemGroup = ({ items }: Props) => {
  return (
    <Flex as="section" direction="column" gap={12}>
      {items.map((group, index) => (
        <Flex key={index} gap={12} align="center">
          <Txt size="headingMedium" lineHeight="xxlarge" color="gray200">
            •
          </Txt>
          <Txt size="contentLarge" lineHeight="xxlarge" color="gray200">
            {joinNodes(group, ', ')}
          </Txt>
        </Flex>
      ))}
    </Flex>
  );
};

export default ResumeSkillItemGroup;
