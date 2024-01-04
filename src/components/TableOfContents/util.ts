import type { TableOfContentDepth } from './model';

export const isTableOfcontentDepth = (depth: number): depth is TableOfContentDepth => {
  return depth > 0 && depth < 7;
};
