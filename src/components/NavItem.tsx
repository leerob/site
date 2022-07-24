import NextLink from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

export default function NavItem({
  href,
  text
}: {
  href: string;
  text: string;
}) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-gray-900 dark:text-gray-100'
            : 'font-normal text-gray-700 dark:text-gray-300',
          'hidden md:inline-block  transition-all pr-4 delay-150 hover:text-signal dark:hover:text-signal'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}
