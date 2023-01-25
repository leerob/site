// import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ParsedUrlQuery } from 'querystring';

export interface ITag {
  _id: string;
  title: string;
  slug: string;
}

export interface IPost {
  _id: string;
  slug: string;
  content: string;
  title: string;
  date: string;
  excerpt: string;
  tags: ITag[];
  coverImage: string;
  readingTime?: string;
  mdxContent?: MDXRemoteSerializeResult;
}

export interface ISnippet {
  _id: string;
  slug: string;
  content: string;
  title: string;
  description: string;
  iconTitle: string;
  mdxContent: MDXRemoteSerializeResult;
}

export interface ICurrentlyPlaying {
  songUrl?: string;
  artist?: string;
  title?: string;
  isPlaying: boolean;
}

interface ISeoProps {
  title: string;
  description?: string;
  image?: string;
  type?: string;
  date?: string;
  tags?: string[];
}

export interface IContainerPropsWithChildren extends ISeoProps {
  children: React.ReactNode;
}

export interface IParams extends ParsedUrlQuery {
  slug: string;
}

export interface IWakaApiResponse {
  dexportecimal: string;
  digital: string;
  hours: number;
  minutes: number;
  name: string;
  percent: number;
  text: string;
  total_seconds: bigint;
}
