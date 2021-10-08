import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { getTweets } from 'lib/twitter';
import components from 'components/MDXComponents';
import BlogLayout from 'layouts/blog';
import Tweet from 'components/Tweet';
import { allBlogs } from '.contentlayer/data';
import type { Blog } from '.contentlayer/types';

export default function Blog({ post, tweets }: { post: Blog; tweets: any[] }) {
  const Component = useMemo(
    () => getMDXComponent(post.body.code),
    [post.body.code]
  );
  const StaticTweet = ({ id }) => {
    const tweet = tweets.find((tweet) => tweet.id === id);
    return <Tweet {...tweet} />;
  };

  return (
    <BlogLayout post={post}>
      <Component
        components={
          {
            ...components,
            StaticTweet
          } as any
        }
      />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);
  const tweets = await getTweets(post.tweetIds);

  return { props: { post, tweets } };
}
