import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/vars.css';

export const heroStyle = style({
  objectFit: 'cover',
  borderRadius: vars.radius[12],
  filter: 'brightness(60%)',
});
