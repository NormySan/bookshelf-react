import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/author/$id')({
  component: () => <div>Hello /author/$id!</div>,
});
