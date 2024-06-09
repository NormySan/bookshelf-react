/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as BookIdImport } from './routes/book.$id'
import { Route as AuthorIdImport } from './routes/author.$id'

// Create Virtual Routes

const AboutLazyImport = createFileRoute('/about')()

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const BookIdRoute = BookIdImport.update({
  path: '/book/$id',
  getParentRoute: () => rootRoute,
} as any)

const AuthorIdRoute = AuthorIdImport.update({
  path: '/author/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/author/$id': {
      id: '/author/$id'
      path: '/author/$id'
      fullPath: '/author/$id'
      preLoaderRoute: typeof AuthorIdImport
      parentRoute: typeof rootRoute
    }
    '/book/$id': {
      id: '/book/$id'
      path: '/book/$id'
      fullPath: '/book/$id'
      preLoaderRoute: typeof BookIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AboutLazyRoute,
  AuthorIdRoute,
  BookIdRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/author/$id",
        "/book/$id"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/author/$id": {
      "filePath": "author.$id.tsx"
    },
    "/book/$id": {
      "filePath": "book.$id.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
