import { style } from '@vanilla-extract/css';
import { color } from '../../../../styles/token';
import { sprinkles } from '../../../../styles/sprinkles.css';

export const resumeSectionContainerStyle = sprinkles({
  marginTop: 24,
});

export const resumeSectionTitleStyle = style({
  color: color.secondary,
});
