import { createClient } from 'next-sanity'

export const client = createClient({
  apiVersion: process.env.SANITY_API_VERSION || '2023-12-12',
  dataset: process.env.SANITY_STUDIO_DATASET,
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  useCdn: process.env.NODE_ENV !== 'production'
});
