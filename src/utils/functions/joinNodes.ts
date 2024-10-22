import type { ReactNode } from 'react';

export function joinNodes(nodes: ReactNode[], separator: ReactNode) {
  if (nodes.length === 0) {
    return [];
  }

  return nodes.reduce((prev, current) => [prev, separator, current]);
}
