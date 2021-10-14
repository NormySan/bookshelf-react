import type { FunctionComponent } from 'react';

import './FooterMenu.scss';

interface Props {
  title: string;
  items: Array<{
    text: string;
    url: string;
  }>;
}

export const FooterMenu: FunctionComponent<Props> = (props) => {
  return (
    <div className="bs-footer-menu">
      <div className="bs-footer-menu__title">{props.title}</div>

      <ul className="bs-footer-menu__items">
        {props.items.map((item) => (
          <li className="bs-footer-menu__item" key={item.url}>
            <a className="bs-footer-menu__link" href={item.url}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
