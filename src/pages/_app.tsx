import '@/styles/global.css';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';

import { DEFAULT_SEO } from '@/config';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.goatcounter.count({
        path: router.asPath
      });
    }
  }, [router]);
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...DEFAULT_SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
