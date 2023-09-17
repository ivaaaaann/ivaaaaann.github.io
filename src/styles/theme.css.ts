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
    base: fonts.heading,
    light: fonts.light,
  },
  fontSize: {
    xxsmal: '10px',
    xsmall: '12px',
    small: '14px',
    medium: '16px',
    large: '18px',
    xlarge: '20px',
    xxlarge: '24px',
    xxxlarge: '28px',
  },
  lineHeight: {
    xxsmal: '12px',
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
