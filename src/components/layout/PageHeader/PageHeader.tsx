import { PageHeaderMenu } from './menu/PageHeaderMenu';
import { PageHeaderSearch } from './search/PageHeaderSearch';

import { Button } from '../../general/Button/Button';

import logo from './logo.svg';

import './PageHeader.scss';

const IconUser = () => {
  return (
    <svg width="17" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.5 9.556a4.167 4.167 0 1 0 0-8.334 4.167 4.167 0 0 0 0 8.334ZM8.5 12.889c-5.063 0-7.5 3.158-7.5 5v1.667h15v-1.667c0-1.833-2.437-5-7.5-5Z"
        stroke="#000"
        stroke-width="1.5"
      />
    </svg>
  );
};

const IconBookmark = () => {
  return (
    <svg width="17" height="23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h16.14v23l-8.07-4.879L0 23V0Z" fill="#000" />
      <path
        d="M8 5v8M4 9h8"
        stroke="#fff"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const PageHeader = () => {
  return (
    <header className="bs-page-header">
      <div className="bs-page-header__content">
        <div className="bs-page-header__left">
          <img alt="Bookplace" src={logo} className="bs-page-header__logo" />
        </div>

        <div className="bs-page-header__center">
          <div className="bs-page-header__search">
            <PageHeaderSearch />
          </div>
        </div>

        <div className="bs-page-header__right">
          <div className="bs-page-header__menu">
            <PageHeaderMenu />
          </div>

          <div className="bs-page-header__readlist">
            <Button outline>
              <IconBookmark />
              Readlist
            </Button>
          </div>

          <div className="bs-page-header__user">
            <a href="#menu-user">
              <IconUser />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
