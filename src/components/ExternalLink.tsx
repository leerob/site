import cn from 'classnames';

export default function ExternalLink({
  href,
  color,
  children
}: {
  href: string;
  color?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className={cn(
        'fill-current delay-100 text-gray-800 hover:text-pink-400  dark:text-gray-100 dark:hover:text-emerald-400 transition-all '
      )}
      href={href}
    >
      {children}
    </a>
  );
}
