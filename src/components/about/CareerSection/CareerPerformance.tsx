import React, { type PropsWithChildren, type ReactNode } from 'react';
import Flex from '../../common/Flex';
import { careerPerformanceContainer } from './CareerPerformance.css';
import Txt from '../../common/Txt';
import Convert from '../../common/util/Convert';

type Props = {
  title?: string;
};

const CareerPerformance = ({ title, children }: PropsWithChildren<Props>) => {
  return (
    <Flex direction="column" className={careerPerformanceContainer} gap={6}>
      <Convert
        value={title}
        formatter={(title) => (
          <Txt family="base" size="medium" weight="heading">
            {title}
          </Txt>
        )}
      />
      <Txt size="medium" lineHeight="xxlarge">
        {children}
      </Txt>
    </Flex>
  );
};

export default CareerPerformance;
