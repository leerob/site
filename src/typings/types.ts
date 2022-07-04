// import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ParsedUrlQuery } from 'querystring';

export interface IPost {
  _id: string;
  slug: string;
  content: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  readingTime?: string;
  mdxContent?: MDXRemoteSerializeResult
};

export interface ISnippet {
  _id: string;
  slug: string;
  content: string;
  title: string;
  description: string;
  logo: string;
  mdxContent?: MDXRemoteSerializeResult
};

export interface ICurrentlyPlaying {
  songUrl?: string;
  artist?: string;
  title?: string;
  isPlaying: boolean;
};

export interface IContainerProps {
  title: string;
  description?: string;
  image?: string;
  type?: string;
  date?: string;
  tags?: string[];
  author?: string;
  children: React.ReactNode;
};

export interface ISocialIcon  {
  kind: string;
  href: string;
  size?: number;
};

export interface IParams extends ParsedUrlQuery {
  slug: string;
}

export interface ISvg {
  [key: string]: React.ReactNode;
};
