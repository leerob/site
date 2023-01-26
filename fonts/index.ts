import { IBM_Plex_Sans, IBM_Plex_Mono } from '@next/font/google';

export const font_sans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'optional',
  weight: ['400', '700']
});

export const font_mono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'optional',
  weight: ['400']
});
