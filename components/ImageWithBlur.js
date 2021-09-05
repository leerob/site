import Image from 'next/image';
import { useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ImageWithBlur(props) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      alt={props.alt}
      className={classNames(
        props.className,
        isLoading
          ? 'grayscale duration-300 ease-in-out blur-md'
          : 'grayscale-0 duration-300 ease-in-out blur-0'
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
