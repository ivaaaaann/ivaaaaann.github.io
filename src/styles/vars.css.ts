import { createGlobalThemeContract } from '@vanilla-extract/css';
import { color } from './token';

export const vars = createGlobalThemeContract(
  {
    color: Object.keys(color).reduce(
      (acc, cur) => ({ ...acc, [cur]: null }),
      {} as Record<keyof typeof color, null>,
    ),
    fontWeight: {
      base: null,
      heading: null,
    },
    fontFamily: {
      heading: null,
      base: null,
      light: null,
    },
    fontSize: {
      xxsmal: null,
      xsmall: null,
      small: null,
      medium: null,
      large: null,
      xlarge: null,
      xxlarge: null,
      xxxlarge: null,
    },
    lineHeight: {
      xxsmal: null,
      xsmall: null,
      small: null,
      medium: null,
      large: null,
      xlarge: null,
      xxlarge: null,
      xxxlarge: null,
    },
    space: {
      0: null,
      2: null,
      4: null,
      6: null,
      8: null,
      10: null,
      12: null,
      16: null,
      20: null,
      24: null,
      32: null,
      36: null,
      40: null,
      48: null,
      64: null,
      80: null,
      96: null,
      112: null,
      128: null,
    },
    radius: {
      2: null,
      4: null,
      6: null,
      8: null,
      12: null,
    },
  },
  (_, path) => `--prefix-${path.join('-')}`,
);
