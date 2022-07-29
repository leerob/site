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
        'fill-current duration-150 text-gray-800 hover:text-signal  dark:text-gray-100 dark:hover:text-signal-dark ease-in-out  transition-all'
      )}
      href={href}
    >
      {children}
    </a>
  );
}
