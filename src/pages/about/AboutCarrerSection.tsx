import React from 'react';
import type { Carrer } from '../../models/Carrer';
import CareerSection from '../../components/about/CareerSection';
import Flex from '../../components/common/Flex';

type Props = {
  carrer: Carrer;
};

const AboutCarrerSection = ({ carrer }: Props) => {
  const { companyLogo, companyName, workingDay, summary, position, performances } = carrer;

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

export default AboutCarrerSection;
