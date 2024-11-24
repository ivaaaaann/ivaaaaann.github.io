import React, { forwardRef, type ElementType, type ImgHTMLAttributes, type Ref } from 'react';
import { heroStyle } from './hero.css';
import type { PolymorphicComponentProps } from '../system/polymorphic';

const DEFAULT_ELEMENT = 'img';

export type HeroOwnProps = ImgHTMLAttributes<HTMLImageElement> & {
  className?: string;
};

export type HeroProps<Element extends ElementType> = PolymorphicComponentProps<
  Element,
  HeroOwnProps
>;

type HeroComponent = <Element extends ElementType = typeof DEFAULT_ELEMENT>(
  props: HeroProps<Element>,
) => React.ReactNode;

const Hero: HeroComponent = forwardRef(
  <Element extends ElementType = typeof DEFAULT_ELEMENT>(
    { as, className, ...restProps }: HeroProps<Element>,
    ref: Ref<HTMLImageElement>,
  ) => {
    const Element = as ?? DEFAULT_ELEMENT;

    return <Element ref={ref} className={heroStyle} {...restProps} />;
  },
);

export default Hero;
