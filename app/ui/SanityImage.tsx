import Image from 'next/image';
import { SanityAssetExtended } from '@/app/lib/sanity';
import { createRemoteImageAttributes } from '@/app/lib/sanity';

export function SanityImage({ image }: { image: SanityAssetExtended }) {
  const { width, height, img } = createRemoteImageAttributes(image);
  return (
    <figure>
      <Image
        src={img}
        width={width}
        height={height}
        alt={image.alt}
        quality="100"
        className="h-auto w-full"
        sizes="100vw"
        blurDataURL={image.lqip}
      />
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  );
}
