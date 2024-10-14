import QuotaLabLogo from '../../public/assets/careerLogos/quotalabLogo.svg';
import type { Career } from '../models/Career';

export const SITE_HOST = 'ivaaaaann.github.io';
export const SITE_URL = `https://${SITE_HOST}`;
export const SITE_TITLE = "Ivan's Youth";
export const SITE_DESCRIPTION =
  '안녕하세요, 저의 청춘에서 노력했던 모든 것들을 기록하는 곳입니다. 주로 기술적 고민과 회고 정도로 글을 올립니다.';

export const SITE_ABOUT_INTRODUCTION =
  '안녕하세요, 어떻게 인생을 행복하게 살 수 있을지 고민하는 개발자, 임동현입니다.';

export const SOCIAL_GITHUB = 'https://github.com/ivaaaaann';
export const SOCIAL_LINKEDIN =
  'https://www.linkedin.com/in/%EB%8F%99%ED%98%84-%EC%9E%84-5ba581259/';
export const SOCIAL_GMAIL = 'ldh165163@gmail.com';
export const SOCIAL_NOTION = 'https://ldh3907.notion.site/1fd3912a2baa4c1996d4bf2daacbb2f7';

export const QUOTALAB_CAREER: Career = {
  companyLogo: QuotaLabLogo,
  companyName: '쿼타랩',
  workingDay: [new Date(2023, 6, 24), null],
  summary:
    '쿼타랩은 스톡옵션, 주주총회, 영업보고와 같은 금융/비상장 데이터를 벤처ㆍ스타트업, 투자자, 출자자를 연결하여 자본의 흐름을 효율적으로 관리할 수 있는 비즈니스를 만들어가고 있는 회사입니다.',
  position: 'Frontend Engineer',
  performances: [
    {
      title: 'SMB Project',
      content:
        '영업보고, 동의권/협의권, 주주총회 등 스타트업과 투자자(GP) 사이에서 발생하는 번거롭고 효율적이지 못한 커뮤니케이션을 완화할 수 있는 기능을 개발하였습니다.',
    },
    {
      title: '도메인 패키지 분리 작업',
      content:
        '기존 패키지 분리 없이, Yarn Workspace로 모노레포만 적용돼 있는 프로젝트에서 도메인을 효율적으로 관리하기 위해 주도적으로 도메인 로직들을 패키지로 분리하는 작업을 하였습니다.',
    },
  ],
};
