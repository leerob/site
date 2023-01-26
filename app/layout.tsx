import 'styles/globals.css';
import { font_sans } from 'fonts';

// TODO: Move mono font to snippets layout

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font_sans.variable}>
      <head />
      <body>{children}</body>
    </html>
  );
}
