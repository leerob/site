import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

// TODO: Refactor next-seo
export default function Container(props) {
  const router = useRouter();
  const articleMeta =
    props.type === 'article'
      ? {
          publishedTime: props.date,
          tags: props.tags ? props.tags : ['dev-portfolio', 'personal-website'],
          authors: ['https://twitter.com/svirins'],
          description: props.description
        }
      : {};

  const pageMeta = {
    title: props.title,
    description: props.description,
    openGraph: {
      title: props.title,
      article: articleMeta,
      url:
        `https://www.svirins.codes${router.asPath}` ??
        'https://www.svirins.codes',
      type: props.type ?? 'page',
      image: props.image ?? 'https://svirins.codes/static/images/banner.jpeg',
      images: [
        {
          url: props.image ?? 'https://svirins.codes/static/images/banner.jpeg',
          alt: props.title
        }
      ]
    }
  };

  return (
      <NextSeo {...pageMeta} />
  );
}
