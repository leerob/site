[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fleerob%2Fleerob.io&env=NEXT_PUBLIC_SANITY_PROJECT_ID,NEXT_PUBLIC_SANITY_DATASET,SANITY_API_TOKEN,SANITY_PREVIEW_SECRET,SANITY_STUDIO_REVALIDATE_SECRET&envDescription=These%20values%20are%20needed%20to%20connect%20to%20Sanity%20and%20fetch%20content%20for%20blog%20posts.)

# leerob.io

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [PlanetScale](https://planetscale.com)
- **ORM**: [Prisma](https://prisma.io/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **CMS**: [Sanity](https://www.sanity.io/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Learn More

I've recorded two live streams walking through this repository and answering questions.

- [Stream #2 – Nov 10, 2021 (1h 4min)](https://www.youtube.com/watch?v=WZZFW5xDjJ4)
  - [Browse repository](https://github.com/leerob/leerob.io/tree/747479118497d31433cb78ced5c1628ed5d1583b) at this point in time.
- [Stream #1 – Jan 27, 2021 (1h 11min)](https://www.youtube.com/watch?v=xXQsF0q8KUg)
  - [Browse repository](https://github.com/leerob/leerob.io/tree/568df6d056a4f7ea6f10fab07786c8ec6cbbddde) at this point in time.

## Overview

- `layouts/*` - The different page layouts each MDX category (blog, snippets) uses.
- `lib/*` - Short for "library", a collection of helpful utilities or code for external services.
- `pages/api/*` - [API Routes](https://nextjs.org/docs/api-routes/introduction) powering [`/dashboard`](https://leerob.io/dashboard), newsletter subscription, guestbook, and post views.
- `pages/blog/*` - Static pre-rendered blog pages using MDX.
- `pages/dashboard` - [Personal dashboard](https://leerob.io/dashboard) tracking metrics.
- `pages/sitemap.xml.tsx` - Automatically generated sitemap.
- `pages/feed.xml.tsx` - Automatically generated RSS feed.
- `pages/*` - All other static pages.
- `prisma/*` - My Prisma schema, which uses a PlanetScale MySQL database.
- `public/*` - Static assets including fonts and images.
- `styles/*` - A small amount of global styles. I'm mostly using vanilla Tailwind CSS.

## Running Locally

This application requires Node.js v16.13+.

```bash
git clone https://github.com/leerob/leerob.io.git
cd leerob.io
pnpm install
pnpm dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/leerob/leerob.io/blob/main/.env.example).

## Cloning / Forking

Please review the [license](https://github.com/leerob/leerob.io/blob/main/LICENSE.txt) and remove all of my personal information (resume, blog posts, images, etc.).
