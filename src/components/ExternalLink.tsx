import cn from 'classnames';

export default function ExternalLink({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className={cn(
        'fill-current text-gray-700 dark:text-gray-200 hover:text-emerald-500 dark:hover:text-emerald-400 h-16 w-16'
      )}
      href={href}
    >
      {children}
    </a>
  );
}
