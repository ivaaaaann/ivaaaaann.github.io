import type { PropsWithChildren, ReactNode } from 'react';
import Flex from '../../../common/Flex';
import React from 'react';
import Txt from '../../../common/Txt';
import { resumeContactItemKeyLinkStyle, resumeContactItemKeyStyle } from './index.css';
import clsx from 'clsx';
import { convert } from '../../../../utils/functions/convert';

const ResumeContactItemBase = ({ children }: PropsWithChildren) => {
  return (
    <Flex align="center" gap={4}>
      {children}
    </Flex>
  );
};

const ResumeContactItemKey = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Txt size="large" family="heading" className={resumeContactItemKeyStyle}>
        {children}
      </Txt>
      <Txt size="large" family="heading">
        |
      </Txt>
    </>
  );
};

type ValueProps = PropsWithChildren<{
  href?: string;
}>;

const ResumeContactItemValue = ({ children, href }: ValueProps) => {
  return (
    <a href={href}>
      <Txt
        size="large"
        family="heading"
        className={convert(href, () => resumeContactItemKeyLinkStyle)}
      >
        {children}
      </Txt>
    </a>
  );
};

export const ResumeContactItem = Object.assign(ResumeContactItemBase, {
  Key: ResumeContactItemKey,
  Value: ResumeContactItemValue,
});

export default ResumeContactItem;
