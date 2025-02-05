import { unstable_ViewTransition as ViewTransition } from 'react';

export default function WorkLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <ViewTransition>{children}</ViewTransition>;
}
