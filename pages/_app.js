import '@/styles/global.css';

import { ThemeProvider } from 'next-themes';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@/components/MDXComponents';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}
