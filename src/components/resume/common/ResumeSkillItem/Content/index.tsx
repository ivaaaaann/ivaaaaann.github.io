import type { PropsWithChildren } from 'react';
import Flex from '../../../../common/Flex';
import React from 'react';

const ResumeSkillItemContent = ({ children }: PropsWithChildren) => {
  return (
    <Flex direction="column" gap={40}>
      {children}
    </Flex>
  );
};

export default ResumeSkillItemContent;
