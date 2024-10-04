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
    fontFamily: 'heading',
    margin: 0,
  }),
  {
    fontSize: vars.fontSize.xxlarge,
  },
]);

export const postItemDescriptionStyle = style([
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
    wordBreak: 'break-word',
    height: 52,
  },
]);

export const postItemTagStyle = style([
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
