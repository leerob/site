import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { PropsWithChildren } from 'react';

export type Post = {
  _id: string;
  slug: string;
  content: MDXRemoteSerializeResult;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  readingTime: string;
};

export type Snippet = {
  _id: string;
  slug: string;
  content: MDXRemoteSerializeResult;
  title: string;
  description: string;
  logo: string;
};

export type Song = {
  songUrl: string;
  artist: string;
  title: string;
};

export type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export type TSocialIcon = {
  kind: string;
  href: string;
  size?: number;
};

export type TEmoji = {
  name: string;
  size?: string;
  className?: string;
}

export type TLinkProps = {
  href: string;
  children:  React.ReactNode;
}