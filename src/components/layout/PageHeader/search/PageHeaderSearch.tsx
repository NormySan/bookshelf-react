import { FunctionComponent } from 'react';

import './PageHeaderSearch.scss';

export const PageHeaderSearch: FunctionComponent = () => {
  return (
    <input
      className="bs-page-header-search"
      placeholder="Search books, authors and users..."
    />
  );
};
