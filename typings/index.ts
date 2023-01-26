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

interface ISeoProps {
  title: string;
  description?: string;
  image?: string;
  type?: string;
  date?: string;
  tags?: string[];
}

export interface IParams extends ParsedUrlQuery {
  slug: string;
}
