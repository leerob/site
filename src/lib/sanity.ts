import createImageUrlBuilder from '@sanity/image-url';
import { sanityConfig } from './sanity-config';

export const imageBuilder = createImageUrlBuilder(sanityConfig);

export const urlForImage = (source: string) =>
  imageBuilder.image(source).auto('format').fit('max');
