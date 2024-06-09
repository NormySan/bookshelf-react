import { IconSearch, IconUser } from '@tabler/icons-react';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <header className="container mx-auto flex items-center justify-between py-6">
        <div>
          <Link
            to="/"
            className="font-sans text-2xl font-semibold text-stone-800 outline-none focus-visible:border-b-4 focus-visible:border-b-amber-500"
          >
            Bookshelf
          </Link>
        </div>

        <div className="flex gap-4">
          <div className="relative">
            <div className="absolute flex h-11 w-11 items-center justify-center">
              <IconSearch className="text-stone-300" />
            </div>

            <input
              className="block shrink-0 rounded-full border-2 border-stone-300 bg-white py-2 pl-11 pr-4 outline-none focus-visible:border-amber-500"
              type="text"
            />
          </div>

          <a
            href="#"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500"
          >
            <IconUser />
          </a>
        </div>
      </header>

      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
