import React from 'react';
import Flex from '../../common/Flex';
import Txt from '../../common/Txt';
import { dateFormat } from '../../../utils/date';
import { isNullish } from '../../../utils/functions/is';

type Props = {
  companyName: string;
  summary: string;
  position: string;
  workingDay: [Date, Date | null];
};

const CarrerSectionSummary = ({ companyName, workingDay, summary, position }: Props) => {
  return (
    <Flex direction="column" gap={12}>
      <Flex gap={10} align="center">
        <Txt size="xlarge" weight="heading">
          {companyName}
        </Txt>
        <Txt color="gray500" size="small">
          {`${dateFormat(workingDay[0], 'yyyy.MM')} ~ ${
            isNullish(workingDay[1]) ? '현재' : dateFormat(workingDay[1], 'yyyy.MM')
          }`}
        </Txt>
      </Flex>
      <summary>
        <Txt size="small" lineHeight="large">
          {summary}
        </Txt>
      </summary>
      <Txt size="medium" color="gray300">
        {position}
      </Txt>
    </Flex>
  );
};

export default CarrerSectionSummary;
