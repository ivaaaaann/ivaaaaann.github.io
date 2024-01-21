import { sprinkles } from '../../styles/sprinkles.css';

export const createVariantsWithSprinkles = <Values extends Record<string, unknown>>(
  values: Values,
  key: unknown,
) => {
  return Object.keys(values).reduce(
    (acc, cur) => ({ ...acc, [cur]: sprinkles({ [key as keyof Values]: cur }) }),
    {} as Record<keyof typeof values, string>,
  );
};
