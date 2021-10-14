import type { FunctionComponent } from 'react';

import './Preamble.scss';

export const Preamble: FunctionComponent = ({ children }) => {
  return <div className="bs-preamble">{children}</div>;
};
