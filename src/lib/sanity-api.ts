import type { TPost, TSnippet } from '@/typings/types';

import { sanityClient, getClient } from './sanity-server';

import {
  indexQuery,
  postQuery,
  postBySlugQuery,
  postSlugsQuery,
  postUpdatedQuery,
  allSnippetsQuery,
  snippetsQuery,
  snippetSlugsQuery
} from './sanity-queries';

export const getPosts = async (): Promise<TPost[]> => {
  const posts = await sanityClient.fetch(indexQuery);
  return posts;
};

export const getPostSlugs = async (): Promise<string[]> => {
  const slugs = await sanityClient.fetch(postSlugsQuery);
  return slugs;
};

export const getPost = async (
  slug: string,
  preview: boolean
): Promise<TPost> => {
  const { post } = await sanityClient.fetch(postQuery, { slug: slug });
  return post;
};

export const getPostBySlug = async (
  slug: string,
  preview: boolean
): Promise<TPost> => {
  const { post } = await getClient(preview).fetch(postBySlugQuery, { slug });
  return post;
};
export const getUpdatedPostSlug = async (id: string): Promise<string> => {
  const slug = sanityClient.fetch(postUpdatedQuery, { id });
  return slug;
};

export const getSnippets = async (preview: boolean): Promise<TSnippet[]> => {
  const snippets = await getClient(preview).fetch(allSnippetsQuery);
  return snippets;
};

export const getSnippetSlugs = async (): Promise<string[]> => {
  const slugs = await sanityClient.fetch(snippetSlugsQuery);
  return slugs;
};

export const getSnippet = async (
  slug: string,
  preview: boolean
): Promise<TSnippet> => {
  const { snippet } = await getClient(preview).fetch(snippetsQuery, { slug });
  return snippet;
};
