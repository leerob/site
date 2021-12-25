import { useRouter } from 'next/router';
import Link from 'next/link';
import cn from 'classnames';

const NavLink = ({
  text,
  href,
  hasNestedRoutes = false
}: {
  text: string;
  href: string;
  hasNestedRoutes?: boolean;
}) => {
  const { pathname } = useRouter();
  let isActive: boolean;

  if (hasNestedRoutes) {
    // For example, /blog, /blog/1, /blog/2
    isActive = pathname.startsWith(href);
  } else {
    isActive = pathname === href;
  }

  return (
    <Link href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400',
          'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </Link>
  );
};

export default NavLink;
