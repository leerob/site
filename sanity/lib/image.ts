import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

const imageBuilder = createImageUrlBuilder({
  dataset: process.env.SANITY_STUDIO_DATASET!,
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!
});

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max').url()
}
