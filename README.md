[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fleerob%2Fsite)

# site

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Postgres](https://vercel.com/postgres)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## Running Locally

This application requires Node.js v18.17+.

```bash
git clone https://github.com/leerob/site.git
cd site
bun install
bun run delete # Remove all of my notes
bun dev
```

Optional: Create a `.env.local` file with your `POSTGRES_URL` environment variable to store redirects.

## Database Schema

```sql
CREATE TABLE redirects (
  id SERIAL PRIMARY KEY,
  source VARCHAR(255) NOT NULL,
  destination VARCHAR(255) NOT NULL,
  permanent BOOLEAN NOT NULL
);
```

## License

1. You are free to use this code as inspiration.
2. Please do not copy it directly.
3. Crediting the author is appreciated.

Please remove all of my personal information by running `bun run delete`.
https://mopost.medium.com/exploring-nordvpns-tunneling-protocol-unmatched-speed-and-security-c2864f46a01a
https://mopost.medium.com/great-52dd611c575c
https://mopost.medium.com/great-post-475cdfe025d6
https://mopost.medium.com/list/reading-list
https://mopost.medium.com/lists
https://mopost.medium.com/naming-your-sustainable-fashion-brand-1ec1b7f5a1a3
https://mopost.medium.com/sweet-heart-sweet-moments-1da96c054c61
https://mopost.medium.com/the-challenges-facing-freelancers-in-pakistan-2478d62926c4
https://mopost.medium.com/the-dynamics-of-choosing-bridesmaid-dresses-a-comprehensive-guide-5631de47a3df
https://mopost.medium.com/the-impact-of-footwear-on-knee-health-understanding-the-risks-and-recommendations-4416fa667dfc
https://mopost.medium.com/the-intersection-of-philosophy-and-music-a-historical-overview-151858466949
https://mopost.medium.com/the-meaning-behind-a-jacket-what-does-it-really-say-01caaf4ed7a6
https://mopost.medium.com/the-rise-of-pop-up-shops-creating-memorable-retail-experiences-22089fda1c72
https://mopost.medium.com/the-ultimate-guide-to-choosing-workout-clothes-6f7c4d3e3136
https://mopost.medium.com/the-ultimate-guide-to-costume-jewelry-trends-tips-and-top-brands-3c92a0627a33
https://mopost.medium.com/the-ultimate-guide-to-men-s-t-shirts-style-brands-and-choices-bac54fae5a2f
