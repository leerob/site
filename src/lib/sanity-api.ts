import { IPost, ISnippet } from '@/typings';

import {
  allSnippetsQuery,
  indexQuery,
  postBySlugQuery,
  postQuery,
  postSlugsQuery,
  postUpdatedQuery,
  snippetSlugsQuery,
  snippetsQuery,
  tagRelatedPosts,
  tagSlugsQuery
} from './sanity-queries';
import { sC } from './sanity-server';

export const getPosts = async (): Promise<IPost[]> => {
  const posts = await sC.fetch(indexQuery);
  return posts;
};

export const getPostSlugs = async (): Promise<string[]> => {
  const slugs = await sC.fetch(postSlugsQuery);
  return slugs.filter((i: string) => i);
};

export const getPost = async (slug: string): Promise<IPost> => {
  const { post } = await sC.fetch(postQuery, { slug: slug });
  return post ?? null;
};

export const getPostBySlug = async (slug: string): Promise<IPost> => {
  const { post } = await sC.fetch(postBySlugQuery, { slug });
  return post ?? null;
};
export const getUpdatedPostSlug = async (id: string): Promise<string> => {
  const slug = sC.fetch(postUpdatedQuery, { id });
  return slug ?? null;
};

export const getSnippets = async (): Promise<ISnippet[]> => {
  const snippets = await sC.fetch(allSnippetsQuery);
  return snippets ?? null;
};

export const getSnippetSlugs = async (): Promise<string[]> => {
  const slugs = await sC.fetch(snippetSlugsQuery);
  return slugs ?? null;
};

export const getSnippet = async (slug: string): Promise<ISnippet> => {
  const { snippet } = await sC.fetch(snippetsQuery, { slug });
  return snippet ?? null;
};

export const getTagSlugs = async (): Promise<string[]> => {
  const slugs = await sC.fetch(tagSlugsQuery);
  return slugs ?? null;
};

export const getPostsByTag = async (
  slug: string
): Promise<{
  title: string;
  posts: IPost[];
}> => {
  const posts = await sC.fetch(tagRelatedPosts, { slug });
  return posts ?? null;
};
