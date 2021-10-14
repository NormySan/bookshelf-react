import type { FunctionComponent, ReactNode } from 'react';

import { Heading } from '../../general/Heading/Heading';
import { Link } from '../../general/Link/Link';

import './BookGrid.scss';

interface Props {
  title?: ReactNode;
  action?: ReactNode;
}

export const BookGrid: FunctionComponent<Props> = (props) => {
  const showHeader = props.title || props.action;

  return (
    <div className="bs-book-grid">
      {showHeader && (
        <div className="bs-book-grid__header">
          {props.title && (
            <div className="bs-book-grid__title">
              <Heading level={2}>{props.title}</Heading>
            </div>
          )}

          {props.action && (
            <div className="bs-book-grid__action">
              <Link>{props.action}</Link>
            </div>
          )}
        </div>
      )}

      <div className="bs-book-grid__books">{props.children}</div>
    </div>
  );
};
