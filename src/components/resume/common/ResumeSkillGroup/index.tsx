import React from 'react';
import Flex from '../../../common/Flex';
import Txt from '../../../common/Txt';
import { resumeSkillsGroupItemContainerStyle } from './index.css';

type Props = {
  groupTitle: string;
  items: string[];
};

const ResumeSkillGroup = ({ groupTitle, items }: Props) => {
  return (
    <section>
      <Flex align="center" justify="space-between">
        <Txt size="titleSmall" family="heading">
          {groupTitle}
        </Txt>
        <Flex direction="column" gap={8} className={resumeSkillsGroupItemContainerStyle}>
          {items.map((item, idx) => (
            <Txt size="headingSmall" weight="heading" key={idx}>
              <li>{item}</li>
            </Txt>
          ))}
        </Flex>
      </Flex>
    </section>
  );
};

export default ResumeSkillGroup;
