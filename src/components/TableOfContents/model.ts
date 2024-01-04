export type TableOfContentDepth = 1 | 2 | 3 | 4 | 5 | 6;

export type TableOfContent = {
  id: string;
  text: string;
  depth: TableOfContentDepth;
};
