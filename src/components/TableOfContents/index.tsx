import { Parser } from 'htmlparser2';
import React, { Children, isValidElement, type PropsWithChildren } from 'react';
import { tableOfContentsContainer } from './tableOfContents.css';

type TableOfContent = {
  id: string;
  text: string;
  depth: number;
};

const headingElementRegularExpression = /^h[1-6]$/;

const tableOfContentsParser = (html: string): TableOfContent[] => {
  let headingElements: TableOfContent[] = [];

  const isValidTableOfContent = (
    name: string,
    attributes: {
      [s: string]: string;
    },
  ) => {
    return name.match(headingElementRegularExpression) && attributes.id !== undefined;
  };

  const makeValidTableOfContent = (
    name: string,
    attributes: {
      [s: string]: string;
    },
  ) => {
    const level = Number(name[1]);
    const id = attributes.id;
    return {
      depth: level,
      text: '',
      id,
    };
  };

  const parser = new Parser({
    onopentag(name: string, attributes: { [key: string]: string }) {
      if (isValidTableOfContent(name, attributes)) {
        headingElements.push(makeValidTableOfContent(name, attributes));
      }
    },
    ontext(text: string) {
      headingElements[headingElements.length - 1].text = text;
    },
  });

  parser.write(html);
  parser.end();

  return headingElements;
};

const TableOfContents = ({ children }: PropsWithChildren) => {
  const child = Children.only(children);

  const tebleOfContents = isValidElement<{ value: string }>(child)
    ? tableOfContentsParser(
        child.props.value
          .split('\n')
          .filter((syntax) => syntax.startsWith('<h'))
          .join(''),
      )
    : undefined;

  return (
    <>
      {children}
      <aside className={tableOfContentsContainer}>
        {tebleOfContents !== undefined &&
          tebleOfContents.map((item) => <a href={`#${item.id}`}>{item.text}</a>)}
      </aside>
    </>
  );
};

export default TableOfContents;
