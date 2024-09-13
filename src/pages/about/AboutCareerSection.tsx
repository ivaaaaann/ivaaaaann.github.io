import React from 'react';
import CareerSection from '../../components/about/CareerSection';
import Flex from '../../components/common/Flex';
import type { Career } from '../../models/Career';

type Props = {
  career: Career;
};

const AboutCareerSection = ({ career }: Props) => {
  const { companyLogo, companyName, workingDay, summary, position, performances } = career;

  return (
    <CareerSection companyLogo={companyLogo}>
      <Flex gap={16} direction="column">
        <CareerSection.Summary
          companyName={companyName}
          workingDay={[workingDay[0], workingDay[1]]}
          summary={summary}
          position={position}
        />
        <Flex direction="column">
          {performances.map((performance) => (
            <CareerSection.Performance title={performance.title} key={performance.title}>
              {performance.content}
            </CareerSection.Performance>
          ))}
        </Flex>
      </Flex>
    </CareerSection>
  );
};

export default AboutCareerSection;
