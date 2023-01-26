import 'styles/globals.css';
import { font_sans } from 'fonts';
import Footer from 'ui/Footer';
import Header from 'ui/Header';

// TODO: Move mono font to snippets layout

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font_sans.variable}>
      <head />
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header />
        <main
          id="skip"
          className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"
        >
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
