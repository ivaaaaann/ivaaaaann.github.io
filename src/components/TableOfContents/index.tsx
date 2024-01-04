import { Parser } from 'htmlparser2';
import React, { Children, isValidElement, type ReactNode } from 'react';
import { tableOfContentItemStyle, tableOfContentsContainer } from './tableOfContents.css';
import type { TableOfContent } from './model';
import { isTableOfcontentDepth } from './util';
import { convert } from '../../utils/functions/convert';

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

  const makeValidTableOfFrame = (
    name: string,
    attributes: {
      [s: string]: string;
    },
  ): TableOfContent => {
    const level = Number(name[1]);
    const id = attributes.id;
    return {
      depth: isTableOfcontentDepth(level) ? level : 1,
      text: '',
      id,
    };
  };

  const parser = new Parser({
    onopentag(name: string, attributes: { [key: string]: string }) {
      if (isValidTableOfContent(name, attributes)) {
        headingElements.push(makeValidTableOfFrame(name, attributes));
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

const isTableOfContentGap = (gap: number): gap is 4 | 8 | 12 | 16 | 20 | 24 => {
  return gap % 4 === 0;
};

const convertTableOfContentDepthToGap = (depth: number): 4 | 8 | 12 | 16 | 20 | 24 => {
  const convertedDepth = depth * 4;

  if (isTableOfContentGap(convertedDepth)) {
    return convertedDepth;
  }

  return 4;
};

interface Props {
  children?: ReactNode;
}

const TableOfContents = (props?: Props) => {
  const child = props?.children === undefined ? undefined : Children.only(props?.children);

  const tebleOfContents = isValidElement<{ value: string }>(child)
    ? tableOfContentsParser(
        child.props.value
          .split('\n')
          .filter((syntax) => syntax.startsWith('<h'))
          .join(''),
      )
    : undefined;

  return (
    <aside className={tableOfContentsContainer}>
      {convert(tebleOfContents, (tebleOfContents) =>
        tebleOfContents.map((item) => (
          <a
            className={tableOfContentItemStyle({
              gap: convertTableOfContentDepthToGap(item.depth),
            })}
            href={`#${item.id}`}
          >
            {item.text}
          </a>
        )),
      )}
    </aside>
  );
};

export default TableOfContents;
