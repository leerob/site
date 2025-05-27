import { unstable_ViewTransition as ViewTransition } from 'react';
import { Sidebar } from '../components/sidebar';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <ViewTransition>{children}</ViewTransition>
      <div className="absolute right-0 top-0 hidden lg:block">
        <Sidebar />
      </div>
    </div>
  );
}
