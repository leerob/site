import 'components/tweet.css';

import { notFound } from 'next/navigation';
import { getViews } from 'lib/planetscale';
import { Mdx } from 'components/mdx';
import { allBlogs } from 'contentlayer/generated';
import { fetchTweetAst } from 'static-tweets';
import Balancer from 'react-wrap-balancer';
import ViewCounter from './view-counter';

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Blog({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const views = await getViews(post.slug);
  const tweets = new Map();

  // if (post.tweetIds) {
  //   const tweetAsts = await Promise.all(post.tweetIds.map(fetchTweetAst));

  //   tweetAsts.forEach((tweetAst, index) => {
  //     tweets.set(post.tweetIds[index], tweetAst);
  //   });
  // }

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif max-w-[650px]">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[650px]">
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
          {post.publishedAt}
        </div>
        <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" />
        <ViewCounter slug={post.slug} views={views} />
      </div>
      <Mdx code={post.body.code} tweets={tweets} />
    </section>
  );
}
