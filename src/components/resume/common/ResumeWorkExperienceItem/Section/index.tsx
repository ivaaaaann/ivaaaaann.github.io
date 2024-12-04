import React, { type ReactNode } from 'react';
import { dateFormat } from '../../../../../utils/date';
import { isNullish } from '../../../../../utils/functions/is';
import Flex from '../../../../common/Flex';
import Txt from '../../../../common/Txt';
import Convert from '../../../../common/util/Convert';
import {
  resumeWorkExperienceItemSectionContainer,
  resumeWorkExperienceItemSectionDescriptionStyle,
  resumeWorkExperienceItemSectionLinkStyle,
} from './index.css';
import clsx from 'clsx';

type BaseProps = {
  title: ReactNode;
  accent?: ReactNode;
  description?: ReactNode;
  position?: ReactNode;
  workingDay?: [Date, Date | null];
  className?: string;
};

type WithLink = BaseProps & {
  linkName: ReactNode;
  link: string;
};

type WithoutLink = BaseProps & {
  linkName?: never;
  link?: never;
};

const ResumeWorkExperienceItemSection = ({
  title,
  accent = true,
  description,
  position,
  workingDay,
  link,
  linkName,
  className,
}: WithLink | WithoutLink) => {
  return (
    <Flex
      as="aside"
      direction="column"
      gap={16}
      className={clsx(resumeWorkExperienceItemSectionContainer, className)}
    >
      <Txt as="h3" size={accent ? 'titleLarge' : 'titleMedium'} family="heading" color="gray200">
        {title}
      </Txt>
      <Convert
        value={description}
        formatter={(description) => (
          <Txt
            size="contentLarge"
            color="gray300"
            className={resumeWorkExperienceItemSectionDescriptionStyle}
            lineHeight="xxlarge"
          >
            {description}
          </Txt>
        )}
      />
      <Convert
        value={position}
        formatter={(position) => (
          <Txt size="contentLarge" color="gray400">
            {position}
          </Txt>
        )}
      />
      <Convert
        value={workingDay}
        formatter={(workingDay) => (
          <Txt size="contentLarge" color="gray200">
            {`${dateFormat(workingDay[0], 'yyyy.MM')} ~ ${
              isNullish(workingDay[1]) ? '현재' : dateFormat(workingDay[1], 'yyyy.MM')
            }`}
          </Txt>
        )}
      />
      <Convert
        value={link}
        formatter={(link) => (
          <Txt
            as="a"
            size="contentLarge"
            color="secondary"
            href={link}
            className={resumeWorkExperienceItemSectionLinkStyle}
          >
            {linkName}
          </Txt>
        )}
      />
    </Flex>
  );
};

export default ResumeWorkExperienceItemSection;
