import classNames from 'classnames';

import type { FunctionComponent } from 'react';

import './Button.scss';

interface Props {
  outline?: boolean;
}

export const Button: FunctionComponent<Props> = (props) => {
  const buttonClass = classNames('bs-button', {
    'bs-button--outline': props.outline,
  });

  return <button className={buttonClass}>{props.children}</button>;
};

Button.defaultProps = {
  outline: false,
};
