import {
  RouterProvider as TanstackRouterProvider,
  createRouter,
} from "@tanstack/react-router";

import { routeTree } from "../routeTree.gen";

const router = createRouter({ routeTree });

// This adds the types for the router based on the router instance and
// generated route tree.
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function RouterProvider() {
  return <TanstackRouterProvider router={router} />;
}
