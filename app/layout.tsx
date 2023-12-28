import '@/app/global.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from '@/app/ui/Footer';
import Header from '@/app/ui/Header';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased  bg-gray-900 text-gray-100`}>
        <div className="bg-gray-900">
          <Header />
          <main
            id="skip"
            className="flex flex-col justify-center px-8 bg-gray-900"
          >
            {children}
            <Footer />
          </main>
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
