import React, { type PropsWithChildren } from 'react';
import { cx } from '@emotion/css';
import { dividerColor, dividerContainer } from './index.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { vars } from '../../../styles/vars.css';

export type DividerOwnProps = {
  className?: string;
  color?: string;
};

const Divider = ({ className, color }: PropsWithChildren<DividerOwnProps>) => {
  return (
    <hr
      className={cx(dividerContainer, className)}
      style={assignInlineVars({
        [dividerColor]: color ?? vars.color.border,
      })}
    />
  );
};

export default Divider;
