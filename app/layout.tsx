import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import dotenv from 'dotenv';

dotenv.config();

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL || 'http://localhost'),
  title: {
    default: 'JH',
    template: '%s | JH',
  },
  description: 'Knowledge is power.',
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        GeistSans.variable,
        GeistMono.variable
      )}
      style={{ height: '100%' }}
    >
      <body className="flex flex-col h-screen antialiased max-w-2xl mx-4 mt-8 lg:mx-auto">
        <header>
          <Navbar />
        </header>
        <main className="flex-grow min-w-0 mt-6 flex flex-col px-2 md:px-0">

          {children}
        </main>
        <footer className='flex justify-center items-center border-t border-neutral-200 dark:border-neutral-700'>
          <p className="text-sm prose prose-neutral dark:prose-invert">
            The <a href="https://github.com/b25paWNoYW4/prettydog" target="_blank" rel="noopener noreferrer">code</a> of this site is a fork of Lee Robinson's <a href="https://github.com/leerob/leerob.io" target="_blank" rel="noopener noreferrer">leerob.io</a>.
          </p>
        </footer>
      </body>
    </html>
  );
}
