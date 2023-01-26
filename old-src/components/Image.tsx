import Image, { ImageProps } from 'next/legacy/image';
import styles from 'styles/image.module.css';
import { useState } from 'react';
import clsx from 'clsx';

export default function BlurredImage(props: ImageProps) {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      {...props}
      alt={props.alt}
      width={672}
      height={350}
      className={clsx(
        styles['image-transition'],
        isLoading ? styles['image-loading'] : styles['image-loaded'],
        'rounded-lg  h-auto'
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
