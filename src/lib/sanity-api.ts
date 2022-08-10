import { IPost, ISnippet } from '@/typings';

import { sanityClient } from './sanity-server';

import {
  indexQuery,
  postQuery,
  postBySlugQuery,
  postSlugsQuery,
  postUpdatedQuery,
  allSnippetsQuery,
  snippetsQuery,
  snippetSlugsQuery,
  tagSlugsQuery,
  tagRelatedPosts
} from './sanity-queries';

export const getPosts = async (preview: boolean): Promise<IPost[]> => {
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
): Promise<IPost> => {
  const { post } = await sanityClient.fetch(postQuery, { slug: slug });
  return post ?? null;
};

export const getPostBySlug = async (
  slug: string,
  preview: boolean
): Promise<IPost> => {
  const { post } = await sanityClient.fetch(postBySlugQuery, { slug });
  return post ?? null;
};
export const getUpdatedPostSlug = async (id: string): Promise<string> => {
  const slug = sanityClient.fetch(postUpdatedQuery, { id });
  return slug ?? null;
};

export const getSnippets = async (preview: boolean): Promise<ISnippet[]> => {
  const snippets = await sanityClient.fetch(allSnippetsQuery);
  return snippets ?? null;
};

export const getSnippetSlugs = async (): Promise<string[]> => {
  const slugs = await sanityClient.fetch(snippetSlugsQuery);
  return slugs ?? null;
};

export const getSnippet = async (
  slug: string,
  preview: boolean
): Promise<ISnippet> => {
  const { snippet } = await sanityClient.fetch(snippetsQuery, { slug });
  return snippet ?? null;
};

export const getTagSlugs = async (): Promise<string[]> => {
  const slugs = await sanityClient.fetch(tagSlugsQuery);
  return slugs ?? null;
};

export const getPostsByTag = async (
  slug: string,
  preview: boolean
): Promise<{
  title: string;
  posts: IPost[];
}> => {
  const posts = await sanityClient.fetch(tagRelatedPosts, { slug });
  return posts ?? null;
};
