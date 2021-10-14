import classNames from 'classnames';
import type { FunctionComponent } from 'react';

import './PageSection.scss';

interface Props {
  contained?: boolean;
  padded?: boolean;
}

export const PageSection: FunctionComponent<Props> = (props) => {
  const sectionClass = classNames('bs-page-section', {
    'bs-page-section--contained': props.contained,
    'bs-page-section--padded': props.padded,
  });

  return <section className={sectionClass}>{props.children}</section>;
};

PageSection.defaultProps = {
  contained: false,
  padded: false,
};
