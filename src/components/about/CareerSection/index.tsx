import React, { type PropsWithChildren } from 'react';
import Flex from '../../common/Flex';
import CareerSectionSummary from './CareerSectionSummary';
import CareerPerformance from './CareerPerformance';
import {
  careerSectionCompanyLogoContainer,
  careerSectionCompanyLogoImageContainer,
} from './index.css';

type Props = {
  companyLogo: ImageMetadata;
};

const CareerSectionBase = ({ children, companyLogo }: PropsWithChildren<Props>) => {
  return (
    <article>
      <Flex gap={12}>
        <Flex justify="center" align="center" className={careerSectionCompanyLogoContainer}>
          <img
            src={companyLogo.src}
            alt="company logo"
            className={careerSectionCompanyLogoImageContainer}
          />
        </Flex>
        <Flex direction="column">{children}</Flex>
      </Flex>
    </article>
  );
};

export default Object.assign(CareerSectionBase, {
  Summary: CareerSectionSummary,
  Performance: CareerPerformance,
});
