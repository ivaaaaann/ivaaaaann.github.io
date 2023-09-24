import { style } from '@vanilla-extract/css';
import { sprinkles } from '../styles/sprinkles.css';
import { vars } from '../styles/vars.css';

export const heroWrapStyle = sprinkles({
  position: 'relative',
});

export const heroTitleStyle = style([
  sprinkles({
    fontFamily: 'base',
    position: 'absolute',
    marginY: 0,
  }),
  {
    color: vars.color.white,
    bottom: 20,
    left: 20,
    fontSize: vars.fontSize.large,
    lineHeight: vars.lineHeight.xxlarge,
  },
]);

export const postCoverContainerStyle = style([
  sprinkles({
    width: 'full',
    paddingBottom: 40,
    textDecoration: 'none',
  }),
  {
    borderBottom: `1px solid ${vars.color.border}`,
    cursor: 'pointer',
  },
]);

export const postCoverTitleStyle = style([
  sprinkles({
    fontFamily: 'heading',
    margin: 0,
  }),
  {
    fontSize: vars.fontSize.xxlarge,
  },
]);

export const postCoverDescriptionStyle = style([
  sprinkles({
    width: 'full',
    fontFamily: 'base',
    margin: 0,
    marginY: 16,
    overflow: 'hidden',
  }),
  {
    fontSize: vars.fontSize.medium,
    lineHeight: vars.lineHeight.xxlarge,
    display: '-webkit-flex',
    textOverflow: 'ellipsis',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    maxHeight: 52,
    wordBreak: 'break-word',
  },
]);

export const postCoverTagStyle = style([
  sprinkles({
    fontFamily: 'base',
    padding: 6,
  }),
  {
    fontSize: 'small',
    borderRadius: vars.radius[6],
    backgroundColor: vars.color.gray300,
    color: 'white',
  },
]);
