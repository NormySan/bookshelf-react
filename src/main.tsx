import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from './providers/RouterProvider';
import { QueryClientProvider } from './providers/QueryClientProvider';

import './index.css';

const rootElement = document.getElementById('root')!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <StrictMode>
      <QueryClientProvider>
        <RouterProvider />
      </QueryClientProvider>
    </StrictMode>,
  );
}
