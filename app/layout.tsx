import '@/app/ui/global.css';
import Footer from '@/app/ui/Footer';
import Header from '@/app/ui/Header';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '',
  description: '',
  metadataBase: new URL('')
};
// TODO: Wrap with 'next-themes'
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <div className="bg-gray-50 dark:bg-gray-900">
          <Header />
          <main
            id="skip"
            className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"
          >
            {children}
            <Footer />
          </main>
        </div>
        ;
      </body>
    </html>
  );
}
