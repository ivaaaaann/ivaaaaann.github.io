import React, { type PropsWithChildren } from 'react';
import { containerStyle, type FlexVariants } from './flex.css';
import { cx } from '@emotion/css';

export type FlexProps = PropsWithChildren<FlexVariants> & {
  className?: string;
};

const Flex = ({
  children,
  display = 'flex',
  direction = 'row',
  align = 'normal',
  justify = 'flex-start',
  gap = 0,
  wrap = 'nowrap',
  className,
}: FlexProps) => {
  return (
    <div
      className={cx(containerStyle({ display, direction, align, justify, gap, wrap }), className)}
    >
      {children}
    </div>
  );
};

export default Flex;
