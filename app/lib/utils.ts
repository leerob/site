import { SanityAsset, getImageDimensions } from '@sanity/asset-utils';
import createImageUrlBuilder from '@sanity/image-url';

const imageBuilder = createImageUrlBuilder({
  dataset: process.env.SANITY_STUDIO_DATASET!,
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!
});

export const urlForImage = (source: any) =>
  imageBuilder.image(source).auto('format').fit('max');

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

export function isActive(href: string, currentPath: string): boolean {
  if (href === currentPath) {
    return true;
  }
  if (
    href.search('blog') > 0 &&
    (currentPath.search('blog') > 0 || currentPath.search('tag') > 0)
  ) {
    return true;
  }
  if (href.search('snippets') > 0 && currentPath.search('snippets') > 0) {
    return true;
  }

  return false;
}

export function extractLanguage(filename: string) {
  const extension = filename.split('.').pop();
  if (
    extension === 'js' ||
    extension === 'ts' ||
    extension === 'jsx' ||
    extension === 'tsx'
  ) {
    return 'tsx';
  }
  if (extension === 'sh') {
    return 'shell';
  }
  return 'typescript';
}
