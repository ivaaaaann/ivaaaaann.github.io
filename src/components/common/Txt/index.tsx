import type { PropsWithChildren } from 'react';
import { txtContainer, type TxtVariants } from './index.css';
import React from 'react';
import clsx from 'clsx';

export type TextProps = PropsWithChildren<TxtVariants> & {
  className?: string;
};

const Txt = ({
  size = 'contentMedium',
  weight = 'base',
  whiteSpace = 'normal',
  color = 'base',
  family,
  children,
  className,
  lineHeight,
}: TextProps) => {
  return (
    <div
      className={clsx(
        txtContainer({ size, weight, whiteSpace, color, family, lineHeight }),
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Txt;
