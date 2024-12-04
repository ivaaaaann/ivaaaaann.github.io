import type { PropsWithChildren } from 'react';
import Txt from '../../../../common/Txt';
import React from 'react';

const ResumeWorkExperienceItemDescription = ({ children }: PropsWithChildren) => {
  return (
    <Txt as="summary" size="contentLarge" lineHeight="xxlarge" color="gray200">
      {children}
    </Txt>
  );
};

export default ResumeWorkExperienceItemDescription;
