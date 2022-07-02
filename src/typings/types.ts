import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type TPost = {
  _id: string;
  slug: string;
  content: MDXRemoteSerializeResult;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  readingTime: string;
};

export type TSnippet = {
  _id: string;
  slug: string;
  content: MDXRemoteSerializeResult;
  title: string;
  description: string;
  logo: string;
};

export type TCurrentlyPlayingTrack = {
  songUrl: string;
  artist: string;
  title: string;
};

export type TContainerProps = {
  title: string;
  description?: string;
  image?: string;
  type?: string;
  date?: string;
  tags?: string[];
  author?: string;
  children: React.ReactNode;
};

export type TSocialIcon = {
  kind: string;
  href: string;
  size?: number;
};
