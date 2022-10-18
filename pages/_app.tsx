import 'styles/global.css';

import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import localFont from '@next/font/local';
import cn from 'classnames';

const normal = localFont({
  src: '../public/fonts/ibm-plex-sans-var.woff2',
  style: 'normal'
});
const italic = localFont({
  src: '../public/fonts/ibm-plex-sans-var-italic.woff2',
  style: 'italic'
});

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <main className={cn(normal.className, italic.className)}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </SessionProvider>
  );
}
