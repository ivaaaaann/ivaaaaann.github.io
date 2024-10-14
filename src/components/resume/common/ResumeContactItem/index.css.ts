import { style } from '@vanilla-extract/css';
import { vars } from '../../../../styles/vars.css';

export const resumeContactItemKeyStyle = style({
  backgroundColor: vars.color.secondary,
  color: vars.color.white,
});

export const resumeContactItemKeyLinkStyle = style({
  textDecoration: 'underline',
  color: vars.color.gray400,
});
