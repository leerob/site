// import styles from 'styles/emoji.css';
import cn from 'classnames';
import { kebabCase } from '@/lib/content-utils';
import styles from '@/styles/emoji.module.css';

export default function Emoji({ name, size = 'twa-lg', className }: {
  name: string;
  size?: string;
  className?: string;
}) {
  return (
    <i
      className={cn(
        'inline-block',
        styles.twa,
        size,
        className,
        `${styles.twa}-${kebabCase(name)}`
      )}
    />
  );
}
