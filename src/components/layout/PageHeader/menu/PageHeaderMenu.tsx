import type { FunctionComponent } from 'react';

import './PageHeaderMenu.scss';

export const PageHeaderMenu: FunctionComponent = () => {
  return (
    <nav className="bs-page-header-menu">
      <a href="#menu-books" className="bs-page-header-menu__item">
        Books
      </a>

      <a href="#menu-company" className="bs-page-header-menu__item">
        Company
      </a>
    </nav>
  );
};
