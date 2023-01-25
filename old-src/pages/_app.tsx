import '@/styles/global.css';

import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
// import { Analytics } from '@vercel/analytics/react';

import ErrorBoundary from 'old-src/components/ErrorBoundary';

import { DEFAULT_SEO } from 'config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...DEFAULT_SEO} />
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </ThemeProvider>
  );
}
