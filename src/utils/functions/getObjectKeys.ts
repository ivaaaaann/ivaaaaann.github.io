export const getObjectKeys = <T extends Object>(object: T) => {
  return Object.keys(object) as Array<keyof T>;
};
