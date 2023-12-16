'use client';

import { isActive } from '@/app/lib/utils';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface INavItem {
  href: string;
  text: string;
}

export default function NavItem({ href, text }: INavItem) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        isActive(href, pathname)
          ? 'font-semibold  text-gray-200 '
          : 'font-medium text-gray-400',
        'hidden md:inline-block  transition-all pr-4 duration-150  hover:text-gray-200 ease-in-out text-lg'
      )}
    >
      <span className="capsize">{text}</span>
    </Link>
  );
}
