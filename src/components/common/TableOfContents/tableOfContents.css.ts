import { style } from '@vanilla-extract/css';
import { createVariantsWithSprinkles } from '../../../utils/style/createVariantsWithSprinkles';
import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../../../styles/sprinkles.css';
import { vars } from '../../../styles/vars.css';
import { primitiveProperties } from '../../../styles/primitive.css';

export const tableOfContentsContainer = style([
  sprinkles({
    width: 'full',
    display: 'flex',
    flexDirection: 'column',
  }),
  {
    position: 'sticky',
    top: 100,
    right: 0,
    height: 'min-content',
    gap: 8,
  },
]);

export const tableOfContentItemStyle = recipe({
  base: style([
    sprinkles({ paddingY: 6, paddingX: 8 }),
    {
      borderRadius: vars.radius['4'],
      fontSize: vars.fontSize.captionLarge,
      ':hover': {
        backgroundColor: vars.color.hover,
      },
    },
  ]),
  variants: {
    gap: createVariantsWithSprinkles(primitiveProperties.marginLeft, 'marginLeft'),
  },
});
