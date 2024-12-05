import { createGlobalTheme } from '@vanilla-extract/css';
import { space, color, fonts } from './token';
import { vars } from './vars.css';

createGlobalTheme(':root', vars, {
  color: color,
  fontWeight: {
    base: '400',
    heading: '600',
  },
  fontFamily: {
    heading: fonts.heading,
    base: fonts.base,
    light: fonts.light,
  },
  fontSize: {
    titleSmall: '28px',
    titleMedium: '32px',
    titleLarge: '40px',
    titleXLarge: '64px',
    titleXXLarge: '72px',
    headingSmall: '20px',
    headingMedium: '24px',
    headingLarge: '28px',
    contentSmall: '12px',
    contentMedium: '16px',
    contentLarge: '18px',
    captionSmall: '10px',
    captionMedium: '12px',
    captionLarge: '14px',
  },
  lineHeight: {
    xxsmall: '12px',
    xsmall: '14px',
    small: '16px',
    medium: '18px',
    large: '20px',
    xlarge: '22px',
    xxlarge: '26px',
    xxxlarge: '30px',
  },
  space: space,
  radius: {
    2: '2px',
    4: '4px',
    6: '6px',
    8: '8px',
    12: '12px',
  },
});
