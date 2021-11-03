import Link from 'next/link';

import Analytics from 'components/metrics/Analytics';
import Newsletter from 'components/metrics/Newsletter';
import Container from 'components/Container';
import GitHub from 'components/metrics/Github';
import Gumroad from 'components/metrics/Gumroad';
import Unsplash from 'components/metrics/Unsplash';
import YouTube from 'components/metrics/Youtube';

export default function Dashboard() {
  return (
    <Container
      title="Dashboard – Lee Robinson"
      description="My personal dashboard, built with Next.js API routes deployed as serverless functions."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Dashboard
        </h1>
        <div className="mb-8">
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            This is my personal dashboard, built with Next.js API routes
            deployed as serverless functions. I use this dashboard to track
            various metrics across platforms like Unsplash, YouTube, GitHub, and
            more. Want to build your own? Check out my&nbsp;
            <Link href="/blog/fetching-data-with-swr">
              <a className="text-gray-900 underline dark:text-gray-100">
                blog series.
              </a>
            </Link>
          </p>
        </div>
        <div className="flex flex-col w-full">
          <Unsplash />
          <YouTube />
        </div>
        <div className="grid w-full grid-cols-1 gap-4 my-2 sm:grid-cols-2">
          <Analytics />
          <GitHub />
        </div>
        <div className="grid w-full grid-cols-1 gap-4 my-2 sm:grid-cols-2">
          <Gumroad />
          <Newsletter />
        </div>

      </div>
    </Container>
  );
}
