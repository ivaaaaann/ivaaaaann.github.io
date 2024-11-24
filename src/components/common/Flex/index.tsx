import React, { forwardRef, type ElementType, type PropsWithChildren, type Ref } from 'react';
import { containerStyle, type FlexVariants } from './flex.css';
import { cx } from '@emotion/css';
import type { PolymorphicComponentProps } from '../system/polymorphic';

const DEFAULT_ELEMENT = 'div';

export type FlexOwnProps = FlexVariants & {
  className?: string;
};

export type FlexProps<Element extends ElementType> = PolymorphicComponentProps<
  Element,
  FlexOwnProps
>;

type FlexComponent = <Element extends ElementType = typeof DEFAULT_ELEMENT>(
  props: FlexProps<Element>,
) => React.ReactNode;

const Flex: FlexComponent = forwardRef(
  <Element extends ElementType = typeof DEFAULT_ELEMENT>(
    {
      as,
      children,
      display = 'flex',
      direction = 'row',
      align = 'normal',
      justify = 'flex-start',
      gap = 0,
      wrap = 'nowrap',
      className,
      ...restProps
    }: PropsWithChildren<FlexProps<Element>>,
    ref: Ref<HTMLDivElement>,
  ) => {
    const Element = as ?? DEFAULT_ELEMENT;

    return (
      <Element
        ref={ref}
        className={cx(containerStyle({ display, direction, align, justify, gap, wrap }), className)}
        {...restProps}
      >
        {children}
      </Element>
    );
  },
);

export default Flex;
