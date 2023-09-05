import Link from 'next/link';
import Container from '@/components/Container';
export default function Dashboard() {
  return (
    <Container
      title="Dashboard – Joao Garin"
      description="My personal dashboard, built with Next.js API routes deployed as serverless functions."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Dashboard
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This is my personal dashboard, built with Next.js API routes
            deployed as serverless functions. I use this dashboard to track
            various metrics across platforms like Unsplash, YouTube, GitHub, and
            more. Want to build your own? Check out my&nbsp;
            <Link
              className="text-gray-900 dark:text-gray-100 underline"
              href="/blog/fetching-data-with-swr"
            >
              blog series.
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
}
