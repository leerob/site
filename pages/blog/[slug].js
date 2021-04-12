import hydrate from 'next-mdx-remote/hydrate';

import { getFiles, getFileBySlug } from '@/lib/mdx';
import { getTweets } from '@/lib/twitter';
import BlogLayout from '@/layouts/blog';
import Tweet from '@/components/Tweet';
import MDXComponents from '@/components/MDXComponents';

export default function Blog({ mdxSource, tweets, frontMatter }) {
  const StaticTweet = ({ id }) => {
    const tweet = tweets.find((tweet) => tweet.id === id);
    return <Tweet {...tweet} />;
  };

  const content = hydrate(mdxSource, {
    components: {
      ...MDXComponents,
      StaticTweet
    }
  });

  return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>;
}

export async function getStaticPaths() {
  const posts = await getFiles('blog');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('blog', params.slug);
  const tweets = await getTweets(post.tweetIDs);

  return { props: { ...post, tweets } };
}
