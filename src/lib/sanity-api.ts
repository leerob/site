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

export const getPost = async ({ slug }: { slug: string }): Promise<TPost> => {
  const { post } = await sanityClient.fetch(postQuery, { slug: slug });
  return post;
};

export const getPostBySlug = async ({
  slug
}: {
  slug: string;
}): Promise<TPost> => {
  const preview = true;
  const { post } = await getClient(preview).fetch(postBySlugQuery, { slug });
  return post;
};
export const getUpdatedPostSlug = async ({
  id
}: {
  id: string;
}): Promise<string> => {
  const slug = sanityClient.fetch(postUpdatedQuery, { id });
  return slug;
};

export const getSnippets = async (): Promise<TSnippet[]> => {
  const snippets = await sanityClient.fetch(allSnippetsQuery);
  return snippets;
};

export const getSnippetSlugs = async (): Promise<string[]> => {
  const slugs = await sanityClient.fetch(snippetSlugsQuery);
  return slugs;
};

export const getSnippet = async ({
  slug
}: {
  slug: string;
}): Promise<TSnippet> => {
  const { snippet } = await sanityClient.fetch(snippetsQuery, { slug });
  return snippet;
};
