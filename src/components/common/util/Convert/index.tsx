import { type ReactNode } from 'react';
import { convert } from '../../../../utils/functions/convert';

type Props<T, V> = {
  value: T;
  formatter: (value: NonNullable<T>) => V;
};

const Convert = <T, V extends ReactNode>({ value, formatter }: Props<T, V>): ReactNode => {
  return convert(value, formatter);
};

export default Convert;
