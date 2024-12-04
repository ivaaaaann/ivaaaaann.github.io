import type { PropsWithChildren } from 'react';
import Flex from '../../../common/Flex';
import React from 'react';
import Txt from '../../../common/Txt';
import { resumeContactItemKeyLinkStyle } from './index.css';
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
    <Txt size="contentLarge" color="gray200">
      {children} |
    </Txt>
  );
};

type ValueProps = PropsWithChildren<{
  href?: string;
}>;

const ResumeContactItemValue = ({ children, href }: ValueProps) => {
  const as = href ? 'a' : 'span';

  return (
    <Txt
      as={as}
      size="contentLarge"
      color="gray200"
      className={convert(href, () => resumeContactItemKeyLinkStyle)}
      href={href}
    >
      {children}
    </Txt>
  );
};

export const ResumeContactItem = Object.assign(ResumeContactItemBase, {
  Key: ResumeContactItemKey,
  Value: ResumeContactItemValue,
});

export default ResumeContactItem;
