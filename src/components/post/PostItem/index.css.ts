import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/vars.css';
import { sprinkles } from '../../../styles/sprinkles.css';

export const postItemContainerStyle = style([
  sprinkles({
    display: 'flex',
    paddingBottom: 40,
  }),
  {
    height: 180,
    boxSizing: 'border-box',
    borderBottom: `1px solid ${vars.color.border}`,
  },
]);

export const postItemLayoutStyle = style([
  sprinkles({
    width: 'full',
    height: 'full',
    display: 'flex',
    gap: 32,
  }),
]);

export const postItemContentStyle = style([
  sprinkles({
    width: 'full',
    textDecoration: 'none',
  }),
  {
    cursor: 'pointer',
  },
]);

export const postItemTitleStyle = style([
  sprinkles({
    margin: 0,
  }),
  {
    fontFamily: vars.fontFamily.heading,
    fontSize: vars.fontSize.headingMedium,
  },
]);

export const postItemDescriptionStyle = style([
  sprinkles({
    width: 'full',
    margin: 0,
    marginY: 16,
    overflow: 'hidden',
  }),
  {
    fontFamily: vars.fontFamily.base,
    fontSize: vars.fontSize.contentMedium,
    lineHeight: vars.lineHeight.xxlarge,
    display: '-webkit-flex',
    textOverflow: 'ellipsis',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    wordBreak: 'break-word',
    height: 52,
  },
]);

export const postItemTagStyle = style([
  sprinkles({
    padding: 6,
  }),
  {
    fontFamily: vars.fontFamily.base,
    fontSize: 'small',
    borderRadius: vars.radius[6],
    backgroundColor: vars.color.gray300,
    color: 'white',
  },
]);

export const postItemThumbnailStyle = style([
  sprinkles({
    height: 'full',
  }),
  {
    minWidth: 220,
    maxWidth: 220,
    objectFit: 'cover',
    borderRadius: vars.radius[6],
  },
]);
