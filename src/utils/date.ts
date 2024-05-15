import { format } from 'date-fns';

export const dateFormat = (
  date: number | string | Date | null | undefined,
  formatString: string,
  options?: {
    defaultValue?: string;
  },
) => {
  const defaultValue = options?.defaultValue ?? '';

  if (date == null) {
    return defaultValue;
  }

  try {
    const instance = new Date(date);
    return format(instance, formatString);
  } catch (error) {
    console.error(error);
    return defaultValue;
  }
};
