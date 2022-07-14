import { SANITY_CONFIG } from '@/layouts/config';
import createImageUrlBuilder from '@sanity/image-url';
export const imageBuilder = createImageUrlBuilder(SANITY_CONFIG);

export const urlForImage = (source: string) =>
  imageBuilder.image(source).auto('format').fit('max');
