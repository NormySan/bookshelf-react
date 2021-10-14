import type { FunctionComponent } from 'react';
import classnames from 'classnames';

import './Heading.scss';

interface Props {
  level?: 1 | 2 | 3;
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const Heading: FunctionComponent<Props> = (props) => {
  const Tag = `h${props.level}` as HeadingTag;
  const headingClass = classnames('bs-heading', `bs-heading--${props.level}`);

  return <Tag className={headingClass}>{props.children}</Tag>;
};

Heading.defaultProps = {
  level: 1,
};
