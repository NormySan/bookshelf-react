import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/book/$id')({
  component: () => <div>Hello /book/$id!</div>,
});
