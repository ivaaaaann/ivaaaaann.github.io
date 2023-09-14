export type media = 'mobile' | 'desktop';

export const breakPoints: Record<media, string> = {
  mobile: '608px',
  desktop: '900px',
};

export const color = {
  background: '#fff',
  base: '#3a3d40',
  border: '#d1d1d1',
  primary: '#244382',
  hover: '#c45a8d',
  focus: '#c45a8d',
};

export const fonts = {
  base: 'PretendardRegular',
  heading: 'PretendardBold',
  light: 'PetendardLight',
};

export const space = {
  0: '0px',
  2: '2px',
  4: '4px',
  6: '6px',
  8: '8px',
  10: '10px',
  12: '12px',
  16: '16px',
  20: '20px',
  24: '24px',
  32: '32px',
  36: '36px',
  40: '40px',
  48: '48px',
  64: '64px',
  80: '80px',
  96: '96px',
  112: '112px',
  128: '128px',
};
