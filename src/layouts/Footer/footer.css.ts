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

export const profileNameStyle = style([
  {
    fontSize: vars.fontSize['xxlarge'],
    fontWeight: vars.fontWeight['heading'],
    color: vars.color.primary,
    fontFamily: vars.fontFamily['base'],
  },
]);

export const profileDescriptionStyle = style({
  fontSize: vars.fontSize['medium'],
  fontWeight: vars.fontWeight['base'],
  color: vars.color.base,
  fontFamily: vars.fontFamily['light'],
  lineHeight: vars.lineHeight['xlarge'],
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

export const footerCopyRightTextStyle = style({
  fontSize: vars.fontSize['small'],
  fontWeight: vars.fontWeight['base'],
  color: vars.color.base,
  fontFamily: vars.fontFamily['light'],
});
