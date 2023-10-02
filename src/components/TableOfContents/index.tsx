import React from 'react';
import { tableOfContentsContainer } from './tableOfContents.css';
import clsx from 'clsx';

export interface TableOfContentsProps {
  className?: string;
}

const TableOfContents = ({ className }: TableOfContentsProps) => {
  const headingElements = Array.from(document.querySelectorAll('h1, h2, h3'));

  return (
    <div className={clsx(tableOfContentsContainer, className)}>
      {headingElements.map((element) => (
        <a href={`#${element.id}`}>{element.textContent}</a>
      ))}
    </div>
  );
};

export default TableOfContents;
