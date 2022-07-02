import Image, { ImageProps } from 'next/future/image';
import { useTheme } from 'next-themes';
import React from 'react';

// TODO: finish image typings
export default function ImageWithTheme(props: ImageProps & { src: string }) {
  const { theme } = useTheme();
  return (
    <Image
      alt={props.alt}
      src={theme === 'light' ? props.light : props.dark}
      {...props}
    />
  );
}
