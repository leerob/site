import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';

import Footer from 'components/Footer';
import MobileMenu from 'components/MobileMenu';

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Lee Robinson – Developer, writer, creator.',
    description: `Front-end developer, JavaScript enthusiast, and course creator.`,
    image: 'https://leerob.io/static/images/banner.png',
    type: 'website',
    ...customMeta
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://leerob.io${router.asPath}`} />
        <link rel="canonical" href={`https://leerob.io${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Lee Robinson" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@leeerob" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <nav className="flex items-center justify-between w-full max-w-3xl mx-auto pt-4 pb-8 text-gray-900 bg-gray-50 sticky-nav md:my-8 dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
        <a href="#skip" className="skip-nav">
          Skip to content
        </a>
        <div className="ml-6">
          <MobileMenu />
          <NextLink href="/">
            <a className="hidden md:inline-flex p-1 font-semibold text-gray-800 sm:p-3 sm:p-1 dark:text-gray-200">
              Home
            </a>
          </NextLink>
          <NextLink href="/guestbook">
            <a className="hidden md:inline-flex p-1 font-normal text-gray-800 sm:p-3 dark:text-gray-300">
              Guestbook
            </a>
          </NextLink>
          <NextLink href="/dashboard">
            <a className="hidden md:inline-flex p-1 font-normal text-gray-800 sm:p-3 dark:text-gray-300">
              Dashboard
            </a>
          </NextLink>
          <NextLink href="/videos">
            <a className="hidden md:inline-flex p-1 font-normal text-gray-800 sm:p-3 dark:text-gray-300">
              Videos
            </a>
          </NextLink>
          <NextLink href="/blog">
            <a className="hidden md:inline-flex p-1 font-normal text-gray-800 sm:p-3 dark:text-gray-300">
              Blog
            </a>
          </NextLink>
          <NextLink href="/snippets">
            <a className="hidden md:inline-flex p-1 font-normal text-gray-800 sm:p-3 dark:text-gray-300">
              Snippets
            </a>
          </NextLink>
        </div>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center mr-6"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-5 h-5 text-gray-800 dark:text-gray-200"
            >
              {resolvedTheme === 'dark' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              )}
            </svg>
          )}
        </button>
      </nav>
      <main
        id="skip"
        className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}
