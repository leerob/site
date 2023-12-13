import { SanityAsset, getImageDimensions } from '@sanity/asset-utils';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import { SanityAssetExtended } from '@/app/ui/PortableText';

export function createRemoteImageAttributes(src: SanityAsset) {
  const basewidth = 1000;
  const { width, height } = getImageDimensions(src);
  const actualHeight = Math.trunc((height / width) * basewidth);
  const sanityImageUrl = `${urlForImage(src)
    .format('webp')
    .url()}&w=${basewidth}&h=${actualHeight}`;
  return {
    width: basewidth,
    height: actualHeight,
    img: sanityImageUrl
  };
}

export function BlogImage(image: SanityAssetExtended) {
  const { width, height, img } = createRemoteImageAttributes(image);
  return (
    <figure>
      <Image
        src={img}
        width={width}
        height={height}
        alt={image.alt}
        // placeholder="blur"
        quality="100"
        // blurDataURL={image.lqip}
        className="h-auto w-full"
        sizes="100vw"
      />
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  );
}
