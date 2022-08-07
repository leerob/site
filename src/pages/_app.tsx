import '@/styles/global.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { usePanelbear } from '@panelbear/panelbear-nextjs';
import { DefaultSeo } from 'next-seo';

import { DEFAULT_SEO } from '@/config';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  usePanelbear(process.env.NEXT_PUBLIC_PANELBEAR_SITE_ID, {
    enabled: process.env.NODE_ENV === 'production'
  });
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
