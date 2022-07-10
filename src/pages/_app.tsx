import '@/styles/global.css';
import '@/styles/twemoji.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { usePanelbear } from '@panelbear/panelbear-nextjs';
import { Analytics } from '@/components/Analytics';
import { DefaultSeo } from 'next-seo';

import { DEFAULT_SEO } from '@/config';

export default function App({ Component, pageProps }: AppProps) {
  usePanelbear(process.env.NEXT_PUBLIC_PANELBEAR_SITE_ID, {
    enabled: process.env.NODE_ENV === 'production'
  });
  return (
    <ThemeProvider attribute="class">
      <Analytics />
      <DefaultSeo {...DEFAULT_SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
