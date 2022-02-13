import Container from 'components/Container';
import Subscribe from 'components/Subscribe';
import NewsletterLink from 'components/NewsletterLink';
import { allNewsletters } from '.contentlayer/data';
import { pick } from 'lib/utils';

export default function Newsletter({ newsletters }) {
  return (
    <Container
      title="Newsletter – Lee Robinson"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Newsletter
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          My newsletter provides a behind-the-scenes look into what I'm working
          on and writing about. I frequently share some of my favorite articles
          I've read, as well as anything fascinating about technology.
        </p>
        <Subscribe />
        <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
          Archive
        </h3>
        <div className="prose dark:prose-dark">
          <ul>
            {newsletters
              .sort(
                (a, b) =>
                  Number(new Date(b.publishedAt)) -
                  Number(new Date(a.publishedAt))
              )
              .map((newsletter) => (
                <NewsletterLink key={newsletter.title} {...newsletter} />
              ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const newsletters = allNewsletters.map((newsletter) =>
    pick(newsletter, ['slug', 'title', 'summary', 'publishedAt'])
  );

  return { props: { newsletters } };
}
