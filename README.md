# leerob.io

My portfolio has transformed over the years - from a static HTML site, to Jekyll, to Hugo, and finally to Next.js/React/MDX. My personal slice of the internet provides a platform for my writing and to showcase my latest work.

## Overview

- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction) powering [`/dashboard`](https://leerob.io/dashboard), newsletter subscription, and post views.
- `pages/blog/*` - Static pre-rendered blog pages using [MDX](https://github.com/mdx-js/mdx).
- `pages/dashboard` - [Personal dashboard](https://leerob.io/dashboard) containing metrics from YouTube, Google Analytics, and Unsplash.
- `pages/*` - All other static pages.

## Running Locally

```bash
$ git clone https://github.com/leerob/leerob.io.git
$ cd leerob.io
$ yarn
$ yarn dev
```

Create a `.env.local` file similar to `.env`.

```
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
UNSPLASH_ACCESS_KEY=
GOOGLE_ENCRYPTION_KEY=
GOOGLE_ENCRYPTION_IV=
BUTTONDOWN_API_KEY=
```

## Built Using

- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com)
- [MDX](https://github.com/mdx-js/mdx)
- [Chakra UI](https://chakra-ui.com/)
