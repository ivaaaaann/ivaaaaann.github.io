import { createGlobalTheme } from '@vanilla-extract/css';
import { space, color } from './token';
import { vars } from './vars.css';

createGlobalTheme(':root', vars, {
  color: color,
  fontWeight: {
    base: '400',
    heading: '600',
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
    small: '16px',
    base: '14px',
    heading: '22px',
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
