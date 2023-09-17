import React, { type PropsWithChildren } from 'react';
import { containerStyle, type FlexVariants } from './flex.css';

export type FlexProps = PropsWithChildren<FlexVariants>;

const Flex = ({
  children,
  display = 'flex',
  direction = 'row',
  align = 'normal',
  justify = 'flex-start',
  gap = 0,
  wrap = 'nowrap',
}: FlexProps) => {
  return (
    <div className={containerStyle({ display, direction, align, justify, gap, wrap })}>
      {children}
    </div>
  );
};

export default Flex;
