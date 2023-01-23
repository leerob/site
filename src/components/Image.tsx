import Image, { ImageProps } from "next/legacy/image";
import styles from '@/styles/image.module.css';
import { useState } from 'react';
import cn from 'classnames';

export default function BlurredImage(props: ImageProps) {
  const [isLoading, setLoading] = useState(true);
  console.log('imagr component, props are: ', props);
  return (
    <Image
      {...props}
      alt={props.alt}
      width={672}
      height={350}
      className={cn(
        styles['image-transition'],
        isLoading ? styles['image-loading'] : styles['image-loaded'],
        'rounded-lg  h-auto'
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
