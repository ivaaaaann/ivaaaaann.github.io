import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/vars.css';
import { sprinkles } from '../../styles/sprinkles.css';

export const aboutIntroductionRightContainerStyle = sprinkles({
  paddingY: 20,
});

export const aboutAvatarContainerStyle = style({
  minWidth: '165px',
  objectFit: 'cover',
  borderRadius: vars.radius[12],
});

export const aboutSocialIconStyle = style({
  width: '28px',
  height: '28px',
  borderRadius: '100%',
  ':hover': { backgroundColor: vars.color.hover },
  padding: '2px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const aboutIntroductionLeftContainerStyle = sprinkles({
  paddingY: 32,
});

export const aboutIntroductionHighlightStyle = style({
  backgroundColor: vars.color.blue100,
});

export const aboutSectionTitleStyle = style({
  textDecoration: 'underline',
  textDecorationColor: vars.color.primary,
  textUnderlineOffset: '8px',
  color: vars.color.primary,
});
