import type { PropsWithChildren } from 'react';
import React from 'react';
import Txt from '../../../common/Txt';
import Flex from '../../../common/Flex';

const ResumeAboutMeItem = ({ children }: PropsWithChildren) => {
  return (
    <Flex gap={12}>
      <Txt size="headingMedium" lineHeight="xxlarge" color="gray200">
        •
      </Txt>
      <Txt size="headingSmall" lineHeight="xxlarge" color="gray200">
        {children}
      </Txt>
    </Flex>
  );
};

export default ResumeAboutMeItem;
