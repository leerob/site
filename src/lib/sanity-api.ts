import { IPost, ISnippet } from '@/typings/types';

import { sanityClient, getClient } from './sanity-server';

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
  const posts = await getClient(preview).fetch(indexQuery);
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
  const { post } = await getClient(preview).fetch(postQuery, { slug: slug });
  return post;
};

export const getPostBySlug = async (
  slug: string,
  preview: boolean
): Promise<IPost> => {
  const { post } = await getClient(preview).fetch(postBySlugQuery, { slug });
  return post;
};
export const getUpdatedPostSlug = async (id: string): Promise<string> => {
  const slug = sanityClient.fetch(postUpdatedQuery, { id });
  return slug;
};

export const getSnippets = async (preview: boolean): Promise<ISnippet[]> => {
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
): Promise<ISnippet> => {
  const { snippet } = await getClient(preview).fetch(snippetsQuery, { slug });
  return snippet;
};

export const getTagSlugs = async (): Promise<string[]> => {
  const slugs = await sanityClient.fetch(tagSlugsQuery);
  return slugs;
};

export const getPostsByTag = async (
  slug: string
): Promise<{
  title: string;
  posts: IPost[];
}> => {
  const posts = await sanityClient.fetch(tagRelatedPosts, { slug });
  console.log('api called', slug, posts);
  return posts;
};
