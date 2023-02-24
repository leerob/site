import { MDXRemote } from 'next-mdx-remote';
import BlogLayout from 'layouts/blog';
import Tweet from 'components/Tweet';
import components from 'components/MDXComponents';
import { postQuery, postSlugsQuery } from 'lib/queries';
import { getTweets } from 'lib/twitter';
import { sanityClient, getClient } from 'lib/sanity-server';
import { mdxToHtml } from 'lib/mdx';
import { Post } from 'lib/types';

export default function PostPage({ post }: { post: Post }) {
  const StaticTweet = ({ id }) => {
    const tweet = post.tweets.find((tweet) => tweet.id === id);
    return <Tweet {...tweet} />;
  };

  return (
    <BlogLayout post={post}>
      <MDXRemote
        {...post.content}
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
  const paths = await sanityClient.fetch(postSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params, preview = false }) {
  const { post } = await getClient(preview).fetch(postQuery, {
    slug: params.slug
  });

  if (!post) {
    return { notFound: true };
  }

  const { html, tweetIDs, readingTime } = await mdxToHtml(post.content);
  const tweets = await getTweets(tweetIDs);

  return {
    props: {
      post: {
        ...post,
        content: html,
        tweets,
        readingTime
      }
    }
  };
}
