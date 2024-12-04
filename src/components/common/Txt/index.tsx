import type { ElementType, Ref } from 'react';
import { txtContainer, type TxtVariants } from './index.css';
import React, { forwardRef } from 'react';
import type { PolymorphicComponentProps } from '../system/polymorphic';
import clsx from 'clsx';

const DEFAULT_ELEMENT = 'span';

export type TxtOwnProps = TxtVariants & {
  className?: string;
};

export type TxtProps<Element extends ElementType> = PolymorphicComponentProps<Element, TxtOwnProps>;

type TxtComponent = <Element extends ElementType = typeof DEFAULT_ELEMENT>(
  props: TxtProps<Element>,
) => React.ReactNode;

const Txt: TxtComponent = forwardRef(
  <Element extends ElementType = typeof DEFAULT_ELEMENT>(
    {
      as,
      size = 'contentMedium',
      weight = 'base',
      whiteSpace = 'normal',
      color = 'base',
      family,
      children,
      className,
      lineHeight,
      ...restProps
    }: TxtProps<Element>,
    ref: Ref<HTMLSpanElement>,
  ) => {
    const Element = as ?? DEFAULT_ELEMENT;

    return (
      <Element
        ref={ref}
        className={clsx(
          txtContainer({ size, weight, whiteSpace, color, family, lineHeight }),
          className,
        )}
        {...restProps}
      >
        {children}
      </Element>
    );
  },
);

export default Txt;
