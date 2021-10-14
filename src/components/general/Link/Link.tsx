import type {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
} from 'react';

import './Link.scss';

type Props = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export const Link: FunctionComponent<Props> = ({ children, ...props }) => {
  return (
    <a {...props} className="bs-link">
      {children}
    </a>
  );
};
