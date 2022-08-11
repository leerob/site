import Image, { ImageProps } from 'next/future/image';

export default function BlurredImage(props: ImageProps) {
  return (
    <Image
      {...props}
      alt={props.alt}
      placeholder="blur"
      width={672}
      blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
      className="rounded-lg h-auto"
    />
  );
}
