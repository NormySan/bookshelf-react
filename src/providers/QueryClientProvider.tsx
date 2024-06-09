import {
  QueryClient,
  QueryClientProvider as TanstackQueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { type PropsWithChildren } from 'react';

const queryClient = new QueryClient();

export function QueryClientProvider({ children }: PropsWithChildren) {
  return (
    <TanstackQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </TanstackQueryClientProvider>
  );
}
