import type { PropsWithChildren, ReactNode } from 'react';
import React from 'react';
import Flex from '../../../common/Flex';
import Txt from '../../../common/Txt';
import { resumeSectionContainerStyle, resumeSectionTitleStyle } from './index.css';
import Divider from '../../../common/Divider';

type Props = PropsWithChildren<{
  title: ReactNode;
}>;

const ResumeSection = ({ title, children }: Props) => {
  return (
    <section className={resumeSectionContainerStyle}>
      <Flex direction="column" gap={12}>
        <Txt size="xxxxlarge" weight="heading" family="heading" className={resumeSectionTitleStyle}>
          {title}
        </Txt>
        {children}
      </Flex>
    </section>
  );
};

export default ResumeSection;
