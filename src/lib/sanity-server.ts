/**
 * Server-side Sanity utilities. By having these in a separate file from the
 * utilities we use on the client side, we are able to tree-shake (remove)
 * code that is not used on the client side.
 */
import { createClient } from 'next-sanity';
import { SANITY_CONFIG } from '@/layouts/config';

export const sanityClient = createClient(SANITY_CONFIG);

export const previewClient = createClient({
  ...SANITY_CONFIG,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
});

export const getClient = (preview: boolean) =>
  preview ? previewClient : sanityClient;
