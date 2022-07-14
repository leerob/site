import React, { memo } from 'react';
import Image from 'next/future/image';
import { ITwemoji } from '@/typings';

const getSize = (size: string) => {
  switch (size) {
    case 'base':
      return 32;
    case 'lg':
      return 48;
    case 'xl':
      return 64;
    case '2xl':
      return 64;
    default:
      return 32;
  }
};

const Twemoji = ({ emoji, size = 'base' }: ITwemoji) => {
  const img = emoji.codePointAt(0)!.toString(16);
  return (
    <Image
      src={`https://twemoji.maxcdn.com/v/latest/svg/${img}.svg`}
      height={getSize(size)}
      width={getSize(size)}
      alt={emoji}
    />
  );
};

export default memo(Twemoji);
