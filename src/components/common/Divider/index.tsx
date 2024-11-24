import React, { type PropsWithChildren } from 'react';
import { cx } from '@emotion/css';
import { dividerContainer } from './index.css';

export type DividerOwnProps = {
  className?: string;
};

const Divider = ({ className }: PropsWithChildren<DividerOwnProps>) => {
  return <hr className={cx(dividerContainer, className)} />;
};

export default Divider;
