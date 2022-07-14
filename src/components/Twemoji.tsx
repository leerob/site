import React, { memo } from 'react';
import Image from 'next/future/image';

const Twemoji = ({ emoji, size = 72 }: { emoji: string; size?: number }) => {
  const img = emoji.codePointAt(0)!.toString(16);

  console.log(img);
  return (
    <Image
      src={`https://twemoji.maxcdn.com/v/latest/svg/${img}.svg`}
      height={size}
      width={size}
      alt={emoji}
    />
  );
};

export default memo(Twemoji);
