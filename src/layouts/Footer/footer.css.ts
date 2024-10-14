import { style } from '@vanilla-extract/css';
import { sprinkles } from '../../styles/sprinkles.css';
import { breakPoints } from '../../styles/token';
import { vars } from '../../styles/vars.css';

export const containerStyle = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 36,
    paddingBottom: 36,
    boxSizing: 'border-box',
  }),
  {
    width: breakPoints['desktop'],
  },
]);

export const profileImageStyle = style({
  width: 140,
  height: 140,
  borderRadius: vars.radius[12],
  objectFit: 'cover',
});

export const profileDescriptionContainerStyle = sprinkles({
  height: 'full',
  paddingY: 20,
});

export const footerSocialIconStyle = style({
  width: 40,
  height: 40,
  cursor: 'pointer',
  padding: 12,
  borderRadius: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ':hover': { backgroundColor: vars.color.hover },
});
