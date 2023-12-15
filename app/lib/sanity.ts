import { createClient } from 'next-sanity';
import { SanityAsset } from '@sanity/asset-utils';
import { PortableTextBlock } from '@sanity/types';

export const sanityClient = createClient({
  apiVersion: process.env.SANITY_API_VERSION || '2023-12-12',
  dataset: process.env.SANITY_STUDIO_DATASET,
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  useCdn: process.env.NODE_ENV !== 'production'
});

import {
  allSnippetsQuery,
  allPostsQuery,
  postQuery,
  postSlugsQuery,
  snippetSlugsQuery,
  snippetQuery,
  tagRelatedPosts,
  tagSlugsQuery,
  postUpdatedQuery
} from './queries';

export interface SanityAssetExtended extends SanityAsset {
  aspectRatio: number;
  lqip: string;
  alt: string;
  caption?: string;
}

export interface ITag {
  _id: string;
  title: string;
  slug: string;
}

export interface IPost {
  _id: string;
  slug: string;
  body: PortableTextBlock[];
  headings?: PortableTextBlock[];
  title: string;
  date: string;
  excerpt: string;
  coverImage: SanityAssetExtended;
  readingTime: number;
  tags: ITag[];
}

export interface ISnippet {
  _id: string;
  slug: string;
  title: string;
  description: string;
  body: PortableTextBlock[];
  iconTitle: string;
}

export const getPosts = async (): Promise<IPost[]> => {
  const posts = await sanityClient.fetch(allPostsQuery);
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
  const { snippet } = await sanityClient.fetch(snippetQuery, { slug });
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

export const getUpdatedPostSlug = async (id: string): Promise<string> => {
  const slug = sanityClient.fetch(postUpdatedQuery, { id });
  return slug ?? null;
};
