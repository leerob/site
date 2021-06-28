# joaogarin.com

## Overview

- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction) powering [`/dashboard`](https://joaogarin.com/dashboard), newsletter subscription, and post views.
- `pages/blog/*` - Static pre-rendered blog pages using [MDX](https://github.com/mdx-js/mdx).
- `pages/dashboard` - [Personal dashboard](https://joaogarin.com/dashboard) containing metrics like sales, views, and subscribers.
- `pages/*` - All other static pages.

## Running Locally

```bash
$ git clone https://github.com/leerob/joaogarin.com.git
$ cd joaogarin.com
$ yarn
$ yarn dev
```

Create a `.env.local` file similar to [`.env.example`](https://github.com/leerob/joaogarin.com/blob/master/.env.example).

## Built Using

- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com)
- [MDX](https://github.com/mdx-js/mdx)
- [Tailwind CSS](https://tailwindcss.com/)
