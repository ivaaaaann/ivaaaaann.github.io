import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { createVariantsWithSprinkles } from '../../../utils/style/createVariantsWithSprinkles';
import { sprinkles } from '../../../styles/sprinkles.css';
import { primitiveProperties } from '../../../styles/primitive.css';

export const containerStyle = recipe({
  base: sprinkles({ display: 'flex' }),
  variants: {
    display: {
      flex: sprinkles({ display: 'flex' }),
    },
    direction: createVariantsWithSprinkles(primitiveProperties.flexDirection, 'flexDirection'),
    align: createVariantsWithSprinkles(primitiveProperties.alignItems, 'alignItems'),
    justify: createVariantsWithSprinkles(primitiveProperties.justifyContent, 'justifyContent'),
    gap: createVariantsWithSprinkles(primitiveProperties.gap, 'gap'),
    wrap: createVariantsWithSprinkles(primitiveProperties.flexWrap, 'flexWrap'),
  },
});

export type FlexVariants = RecipeVariants<typeof containerStyle>;
