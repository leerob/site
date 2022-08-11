import createImageUrlBuilder from '@sanity/image-url';

import { SANITY_CONFIG } from '@/config';
export const imageBuilder = createImageUrlBuilder(SANITY_CONFIG);

export const urlForImage = (source: string) =>
  imageBuilder.image(source).auto('format').fit('max');
