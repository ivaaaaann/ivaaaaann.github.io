import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { createVariantsWithSprinkles } from '../../../utils/style/createVariantsWithSprinkles';
import { style } from '@vanilla-extract/css';
import { sprinkles } from '../../../styles/sprinkles.css';
import { vars } from '../../../styles/vars.css';
import { primitiveProperties } from '../../../styles/primitive.css';

export const txtContainer = recipe({
  base: sprinkles({ fontFamily: 'base' }),
  variants: {
    size: {
      xssmall: style({ fontSize: vars.fontSize.xxsmall }),
      xsmall: style({ fontSize: vars.fontSize.xsmall }),
      small: style({ fontSize: vars.fontSize.small }),
      medium: style({ fontSize: vars.fontSize.medium }),
      large: style({ fontSize: vars.fontSize.large }),
      xlarge: style({ fontSize: vars.fontSize.xlarge }),
      xxlarge: style({ fontSize: vars.fontSize.xxlarge }),
      xxxlarge: style({ fontSize: vars.fontSize.xxxlarge }),
    },
    weight: {
      base: style({ fontWeight: vars.fontWeight.base }),
      heading: style({ fontWeight: vars.fontWeight.heading }),
    },
    family: {
      heading: style({ fontFamily: vars.fontFamily.heading }),
      base: style({ fontFamily: vars.fontFamily.base }),
      light: style({ fontFamily: vars.fontFamily.light }),
    },
    whiteSpace: createVariantsWithSprinkles(primitiveProperties.whiteSpace, 'whiteSpace'),
    color: {
      ...Object.keys(vars.color).reduce(
        (acc, cur) => ({
          ...acc,
          [cur]: style({ color: vars.color[cur as keyof typeof vars.color] }),
        }),
        {} as Record<keyof typeof vars.color, string>,
      ),
    },
    lineHeight: {
      xssmall: style({ lineHeight: vars.lineHeight.xxsmall }),
      xsmall: style({ lineHeight: vars.lineHeight.xsmall }),
      small: style({ lineHeight: vars.lineHeight.small }),
      medium: style({ lineHeight: vars.lineHeight.medium }),
      large: style({ lineHeight: vars.lineHeight.large }),
      xlarge: style({ lineHeight: vars.lineHeight.xlarge }),
      xxlarge: style({ lineHeight: vars.lineHeight.xxlarge }),
      xxxlarge: style({ lineHeight: vars.lineHeight.xxxlarge }),
    },
  },
});

export type TxtVariants = RecipeVariants<typeof txtContainer>;
