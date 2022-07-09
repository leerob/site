import { Suspense } from 'react';
import Image from 'next/future/image';
import Link from 'next/link';
import Container from '@/components/Container';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container title="Index page | Dzmitry Svirin">
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16 w-full">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                Hi👏,my name is
              </h1>
              <h1 className="text-gray-700 dark:text-gray-200 mb-4 text-xl md:text-3xl">
                Dzmitry Svirin
              </h1>
              <h1 className="text-gray-700 dark:text-gray-200 mb-4">
                I <em>build</em> things for the web.
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I&apos;m a full-stack developer passionate about TypeScript,
                React ecosystem and databases.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Currently, self-employed freelance programmer, based in Tbilisi,
                🇬🇪
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                In my free time I enjoy, cycling, swimming and good books.
              </p>
              <span className="h-8" />
              <Link href="/projects">
                <a className="flex mt-4 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
                  What have I built?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 ml-1"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                    />
                  </svg>
                </a>
              </Link>
              <Link href="/blog">
                <a className="flex mt-4 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
                  My thoughts
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 ml-1"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                    />
                  </svg>
                </a>
              </Link>
              <Link href="/snippets">
                <a className="flex mt-4 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
                  Some collected sinppets
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 ml-1"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                    />
                  </svg>
                </a>
              </Link>
              <Link href="/snippets">
                <a className="flex mt-4 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
                  Skills & experience
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 ml-1"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                    />
                  </svg>
                </a>
              </Link>
              <Link href="/snippets">
                <a className="flex mt-4 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
                  My resume
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 ml-1"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                    />
                  </svg>
                </a>
              </Link>
              <p className=" mt-4 text-gray-600 dark:text-gray-400 leading-7">
                Happy reading!
              </p>
            </div>
            <div className="w-[176px] sm:w-[256px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt="Dzmitry Svirin"
                height={176}
                width={176}
                src="/avatar.jpeg"
                sizes="30vw"
                priority
                className="rounded-full filter grayscale"
              />
            </div>
          </div>

          <span className="h-16" />
        </div>
      </Container>
    </Suspense>
  );
}
