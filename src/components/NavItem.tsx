import NextLink from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { getActiveStatus } from '@/lib/utils';

export default function NavItem({
  href,
  text
}: {
  href: string;
  text: string;
}) {
  const router = useRouter();

  return (
    <NextLink href={href}>
      <a
        className={cn(
          getActiveStatus(href, router.asPath)
            ? 'font-semibold text-signal dark:text-signal-dark'
            : 'font-normal text-gray-700 dark:text-gray-400',
          'hidden md:inline-block  transition-all pr-4 duration-150 hover:text-signal dark:hover:text-signal-dark ease-in-out'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}
