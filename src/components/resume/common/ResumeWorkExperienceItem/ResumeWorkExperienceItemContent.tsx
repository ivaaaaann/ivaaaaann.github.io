import React, { type PropsWithChildren } from 'react';
import Flex from '../../../common/Flex';

const ResumeWorkExperienceItemContent = ({ children }: PropsWithChildren) => {
  return (
    <Flex direction="column" gap={12}>
      {children}
    </Flex>
  );
};

export default ResumeWorkExperienceItemContent;
