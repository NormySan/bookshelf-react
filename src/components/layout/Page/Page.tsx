import type { FunctionComponent } from 'react';

import { PageFooter } from '../PageFooter/PageFooter';
import { PageHeader } from '../PageHeader/PageHeader';

export const Page: FunctionComponent = ({ children }) => {
  return (
    <div className="bs-page">
      <PageHeader />

      <div className="bs-page__content">{children}</div>

      <PageFooter />
    </div>
  );
};
