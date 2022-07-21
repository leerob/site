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
            ? 'font-semibold text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-700 dark:text-gray-300',
          'hidden md:inline-block hover:underline transition-all pr-4'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}
