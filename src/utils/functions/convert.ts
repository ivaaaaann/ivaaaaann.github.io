export const convert = <T, V>(
  value: T,
  formatter: (value: NonNullable<T>) => V,
): Extract<T, undefined | null> | V => {
  return value == null ? (value as Extract<T, undefined | null>) : formatter(value);
};
