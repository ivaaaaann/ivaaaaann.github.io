import { globalFontFace } from '@vanilla-extract/css';
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
