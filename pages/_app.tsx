import 'styles/global.css';

import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { IBM_Plex_Sans } from '@next/font/google';
import cn from 'classnames';

const normal = IBM_Plex_Sans({
  variant: '400'
});

// const bold = IBM_Plex_Sans({
//   variant: '700'
// });

// const italic = IBM_Plex_Sans({
//   variant: '400-italic'
// });

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <main className={cn(normal.className)}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </SessionProvider>
  );
}
