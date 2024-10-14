import { EMAIL_REGEX } from '../constants/regex';

export const isEmail = (value: string): boolean => {
  return EMAIL_REGEX.test(value);
};
