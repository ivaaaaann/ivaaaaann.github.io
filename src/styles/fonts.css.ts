import { globalFontFace, globalStyle } from '@vanilla-extract/css';
import { fonts } from './token';

globalFontFace(fonts.heading, {
  src: 'url("/fonts/Pretendard-Bold.woff") format("woff")',
  fontDisplay: 'fallback',
});

globalFontFace(fonts.base, {
  src: 'url("/fonts/Pretendard-Regular.woff") format("woff")',
  fontDisplay: 'fallback',
});

globalFontFace(fonts.light, {
  src: 'url("/fonts/Pretendard-Light.woff") format("woff")',
  fontDisplay: 'fallback',
});

globalStyle(
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li,fieldset, form, label, legend,table, caption, tbody, tfoot, thead, tr, th, td,article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary,time, mark, audio, video',
  {
    fontFamily: `${fonts.base}, -apple-system, sans-serif`,
  },
);
