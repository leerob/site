import Image from 'next/future/image';
import styles from '@/styles/image.module.css';
import { useState } from 'react';
import cn from 'classnames';
import { ImageProps } from 'next/future/image';

import { IMAGE_MAX_WIDTH } from '@/config';
export default function BlurredImage(props: ImageProps) {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      {...props}
      alt={props.alt}
      width={IMAGE_MAX_WIDTH}
      className={cn(
        styles['image-transition'],
        isLoading ? styles['image-loading'] : styles['image-loaded'],
        'rounded-lg'
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
