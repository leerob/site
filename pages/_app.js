import '@/styles/global.css';

import { ThemeProvider } from 'next-themes';
import { useAnalytics } from '@/lib/analytics';

export default function App({ Component, pageProps }) {
  useAnalytics();

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
