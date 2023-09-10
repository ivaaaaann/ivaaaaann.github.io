import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { color, primitiveProperties } from './properties';

const definedPrimitiveProperties = defineProperties({
  properties: primitiveProperties,
});

const definedColorProperties = defineProperties({
  properties: {
    color: color,
  },
});

export const sprinkles = createSprinkles(definedPrimitiveProperties, definedColorProperties);
