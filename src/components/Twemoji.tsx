import { toKebabCase } from '@/lib/content-utils';
import '@/styles/twemoji.css';
import { ITwemoji } from '@/typings/types';

const Twemoji = ({ emoji, size = 'twa-lg', className }: ITwemoji) => {
  let cls = `inline-block twa ${size} twa-${toKebabCase(emoji)} ${
    className || ''
  }`;
  return <i className={cls.trim()} />;
};

export default Twemoji;
