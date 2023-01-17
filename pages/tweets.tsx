import Container from 'components/Container';
import Tweet from 'components/Tweet';
import { getTweets } from 'lib/twitter';
import { author } from '../config';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Tweets({ tweets }) {
  return (
    <Container
      title={`Tweets – ${author.name}`}
      description="A collection of tweets that inspire me, make me laugh, and make me think."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Tweets
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This is a collection of tweets I've enjoyed. I use Twitter quite a
          bit, so I wanted a place to publicly share what inspires me, makes me
          laugh, and makes me think.
        </p>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      </div>
    </Container >
  );
}

export async function getStaticProps({locale = 'zh'}) {
  const tweets = await getTweets([
  ]);

  return { props: { tweets, ...(await serverSideTranslations(locale, ['common'])) } };
}
