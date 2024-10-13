import React from 'react';
import clsx from 'clsx';
import { dividerContainer } from './index.css';

type Props = {
  className?: string;
};

const Divider = ({ className }: Props) => {
  return <hr className={clsx(dividerContainer, className)} />;
};

export default Divider;
