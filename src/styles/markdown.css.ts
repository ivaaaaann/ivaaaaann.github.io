import { globalStyle } from '@vanilla-extract/css';
import { vars } from './vars.css';

globalStyle('#markdown-container > h1, h2, h3, h4, blockquote, aside', {
  margin: '20px 0 20px 0',
});

globalStyle('#markdown-container > h1', {
  fontSize: vars.fontSize.xxlarge,
  fontWeight: vars.fontWeight.heading,
});

globalStyle('#markdown-container > h2', {
  fontSize: vars.fontSize.xlarge,
  fontWeight: vars.fontWeight.heading,
});

globalStyle('#markdown-container > h3', {
  fontSize: vars.fontSize.large,
  fontWeight: vars.fontWeight.heading,
});

globalStyle('#markdown-container > h4', {
  fontSize: vars.fontSize.medium,
  fontWeight: vars.fontWeight.heading,
});

globalStyle('#markdown-container > p', {
  color: vars.color.base,
  fontSize: vars.fontSize.medium,
  lineHeight: vars.lineHeight.xxlarge,
  margin: '10px 0 10px 0',
});

globalStyle('#markdown-container > del', {
  color: vars.color.base,
  fontSize: vars.fontSize.medium,
  lineHeight: vars.lineHeight.xxlarge,
});

globalStyle('#markdown-container > p > strong', {
  fontWeight: vars.fontWeight.heading,
  fontFamily: vars.fontFamily.heading,
  margin: '0px 2px',
});

globalStyle('#markdown-container, img', {
  width: '100%',
  borderRadius: vars.radius[6],
});

globalStyle('#markdown-container > blockquote', {
  borderLeft: `3px solid ${vars.color.primary}`,
  padding: '0 20px 0 20px',
});

globalStyle('#markdown-container > blockquote > p', {
  margin: '10px 0 10px 0',
});

globalStyle('#markdown-container > p > code', {
  backgroundColor: vars.color.blue100,
  fontWeight: vars.fontWeight.heading,
  padding: 2,
  borderRadius: vars.radius[4],
});

globalStyle('#markdown-container > p > mark', {
  backgroundColor: vars.color.blue100,
  fontWeight: vars.fontWeight.heading,
  padding: 2,
  borderRadius: vars.radius[4],
});

globalStyle('#markdown-container a', {
  color: vars.color.primary,
  textDecoration: 'underline',
});

globalStyle(`#markdown-container > aside`, {
  backgroundColor: vars.color.hover,
  padding: '20px',
  fontSize: vars.fontSize.medium,
  lineHeight: vars.lineHeight.large,
});

globalStyle(`#markdown-container table`, {
  borderRadius: vars.radius[6],
  overflow: 'hidden',
  borderCollapse: 'collapse',
});

globalStyle(`#markdown-container table > thead > tr > th `, {
  backgroundColor: vars.color.hover,
  padding: '10px',
  fontSize: vars.fontSize.medium,
  lineHeight: vars.lineHeight.large,
  textAlign: 'start',
  borderLeft: `1px solid ${vars.color.white}`,
});

globalStyle(`#markdown-container table tr`, {
  padding: '20px',
  fontSize: vars.fontSize.medium,
  lineHeight: vars.lineHeight.large,
  borderBottom: `1px solid ${vars.color.border}`,
});

globalStyle(`#markdown-container table > tbody > tr > td`, {
  padding: '10px',
  fontSize: vars.fontSize.medium,
  lineHeight: vars.lineHeight.large,
});

globalStyle(`#markdown-container pre`, {
  padding: '14px',
});

globalStyle(`#markdown-container ul > li`, {
  margin: '16px 0 16px 0',
  marginLeft: '16px',
});

globalStyle(`#markdown-container ol > li`, {
  margin: '16px 0 16px 0',
  marginLeft: '16px',
});

globalStyle(`#markdown-container small`, {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  fontSize: vars.fontSize.small,
  color: vars.color.gray400,
});
