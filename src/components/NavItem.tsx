import cn from 'classnames';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { getActiveStatus } from '@/lib/utils';

interface INavItem {
  href: string;
  text: string;
}

export default function NavItem({ href, text }: INavItem) {
  const router = useRouter();

  return (
    <NextLink href={href}>
      <a
        className={cn(
          getActiveStatus(href, router.asPath)
            ? 'font-semibold text-gray-800 dark:text-gray-200 '
            : 'font-medium text-gray-600 dark:text-gray-400',
          'hidden md:inline-block  transition-all pr-4 duration-150 hover:text-gray-800 dark:hover:text-gray-200 ease-in-out text-lg'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}
