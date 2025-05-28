import { unstable_ViewTransition as ViewTransition } from 'react';
import { Sidebar } from './sidebar';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransition>
      {children}
      <Sidebar />
    </ViewTransition>
  );
}
