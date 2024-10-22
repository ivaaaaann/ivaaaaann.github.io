import React, { type ReactNode } from 'react';
import Flex from '../../../common/Flex';
import Txt from '../../../common/Txt';
import { dateFormat } from '../../../../utils/date';
import { isNullish } from '../../../../utils/functions/is';
import { resumeWorkExperienceItemSectionContainer } from './index.css';

type Props = {
  title: ReactNode;
  description: ReactNode;
  position: ReactNode;
  workingDay: [Date, Date | null];
};

const ResumeWorkExperienceItemSection = ({ title, description, position, workingDay }: Props) => {
  return (
    <Flex direction="column" gap={12} className={resumeWorkExperienceItemSectionContainer}>
      <Txt size="titleMedium" family="heading">
        {title}
      </Txt>
      <Txt size="captionLarge">{description}</Txt>
      <Txt size="contentMedium" color="gray400">
        {position}
      </Txt>
      <Txt size="captionLarge">
        {`${dateFormat(workingDay[0], 'yyyy.MM')} ~ ${
          isNullish(workingDay[1]) ? '현재' : dateFormat(workingDay[1], 'yyyy.MM')
        }`}
      </Txt>
    </Flex>
  );
};

export default ResumeWorkExperienceItemSection;
