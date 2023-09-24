import { globalStyle } from '@vanilla-extract/css';
import { vars } from './vars.css';

globalStyle('h1, h2, h3, h4, ul, blockquote', {
  margin: '20px 0 20px 0',
});

globalStyle('h1', {
  fontSize: vars.fontSize.xxlarge,
  fontWeight: vars.fontWeight.heading,
});

globalStyle('h2', {
  fontSize: vars.fontSize.xlarge,
  fontWeight: vars.fontWeight.heading,
});

globalStyle('h3', {
  fontSize: vars.fontSize.large,
  fontWeight: vars.fontWeight.heading,
});

globalStyle('h4', {
  fontSize: vars.fontSize.medium,
  fontWeight: vars.fontWeight.heading,
});

globalStyle('p', {
  color: vars.color.base,
  fontSize: vars.fontSize.medium,
  lineHeight: vars.lineHeight.xxlarge,
  margin: '10px 0 10px 0',
});

globalStyle('del', {
  color: vars.color.base,
  fontSize: vars.fontSize.medium,
  lineHeight: vars.lineHeight.xxlarge,
});

globalStyle('p > strong', {
  fontWeight: vars.fontWeight.heading,
  margin: '0px 2px',
});

globalStyle('img', {
  width: '100%',
  borderRadius: vars.radius[6],
});

globalStyle('blockquote', {
  borderLeft: `3px solid ${vars.color.primary}`,
  padding: '0 20px 0 20px',
});

globalStyle('p > code', {
  backgroundColor: vars.color.blue100,
  fontWeight: vars.fontWeight.heading,
  padding: 2,
  borderRadius: vars.radius[4],
});
