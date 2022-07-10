import cn from 'classnames';

import { toKebabCase } from '@/lib/content-utils';
import { ITwemoji } from '@/typings/types';

const Twemoji = ({ emoji, size = 'twa-lg', className }: ITwemoji) => {
  return (
    <i
      className={cn(
        className,
        'inline-block',
        'twa',
        `twa-${toKebabCase(emoji)}`,
        size
      )}
    />
  );
};

export default Twemoji;
