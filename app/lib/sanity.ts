import { MDXRemoteSerializeResult } from 'next-mdx-remote';

import { client as sanityClient } from '@/sanity/lib/client';

import {
  allSnippetsQuery,
  indexQuery,
  postQuery,
  postSlugsQuery,
  snippetSlugsQuery,
  snippetsQuery,
  tagRelatedPosts,
  tagSlugsQuery
} from './queries';

export interface ITag {
  _id: string;
  title: string;
  slug: string;
}

export interface IPost {
  _id: string;
  slug: string;
  body: string;
  title: string;
  date: string;
  excerpt: string;
  tags: ITag[];
  coverImage: string;
  readingTime: string;
}

export interface ISnippet {
  _id: string;
  slug: string;
  title: string;
  description: string;
  body: string;
  iconTitle: string;
}

export const getPosts = async (): Promise<IPost[]> => {
  const posts = await sanityClient.fetch(indexQuery);
  return posts;
};

export const getPostSlugs = async (): Promise<string[]> => {
  const slugs = await sanityClient.fetch(postSlugsQuery);
  return slugs;
};

export const getPost = async (slug: string): Promise<IPost> => {
  const { post } = await sanityClient.fetch(postQuery, { slug: slug });
  return post ?? null;
};

export const getSnippets = async (): Promise<ISnippet[]> => {
  const snippets = await sanityClient.fetch(allSnippetsQuery);
  return snippets ?? null;
};

export const getSnippetSlugs = async (): Promise<string[]> => {
  const slugs = await sanityClient.fetch(snippetSlugsQuery);
  return slugs ?? null;
};

export const getSnippet = async (slug: string): Promise<ISnippet> => {
  const { snippet } = await sanityClient.fetch(snippetsQuery, { slug });
  return snippet ?? null;
};

export const getTagSlugs = async (): Promise<string[]> => {
  const slugs = await sanityClient.fetch(tagSlugsQuery);
  return slugs ?? null;
};

export const getPostsByTag = async (
  slug: string
): Promise<{
  title: string;
  posts: IPost[];
}> => {
  const posts = await sanityClient.fetch(tagRelatedPosts, { slug });
  return posts ?? null;
};
