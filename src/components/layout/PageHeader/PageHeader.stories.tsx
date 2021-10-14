import { PageHeader as PageHeaderComponent } from './PageHeader';

export default {
  title: 'Components/Layout/Page Header',
  component: PageHeaderComponent,
  argTypes: {
    onLogin: { action: 'onLogin' },
    onLogout: { action: 'onLogout' },
    onCreateAccount: { action: 'onCreateAccount' },
  },
};

export const PageHeader = () => <PageHeaderComponent />;
