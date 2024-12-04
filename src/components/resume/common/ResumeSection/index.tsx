import type { PropsWithChildren, ReactNode } from 'react';
import React from 'react';
import Flex from '../../../common/Flex';
import Txt from '../../../common/Txt';
import {
  resumeSectionContainerStyle,
  resumeSectionDividerStyle,
  resumeSectionTitleStyle,
} from './index.css';
import Divider from '../../../common/Divider';

type Props = PropsWithChildren<{
  title: ReactNode;
  hideDivider?: boolean;
}>;

const ResumeSection = ({ title, hideDivider = false, children }: Props) => {
  return (
    <Flex as="section" direction="column" gap={32} className={resumeSectionContainerStyle}>
      <Txt
        as="h2"
        size="titleLarge"
        weight="heading"
        family="heading"
        lineHeight="xxxlarge"
        className={resumeSectionTitleStyle}
      >
        {title}
      </Txt>
      {hideDivider === false && <Divider className={resumeSectionDividerStyle} color="#ffffff21" />}
      {children}
    </Flex>
  );
};

export default ResumeSection;
