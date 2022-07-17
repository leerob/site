import { NextSeo } from 'next-seo';
import { IContainerProps } from '@/typings';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Container(props: IContainerProps) {
  const router = useRouter();
  const articleMeta =
    props.type === 'article'
      ? {
          publishedTime: props.date,
          tags: props.tags ? props.tags : ['dev-portfolio', 'personal-website'],
          authors: ['https://svirins.codes/about'],
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
      image: props.image ?? 'https://svirins.codes/static/images/banner.png',
      images: [
        {
          url: props.image ?? "https://svirins.codes/static/images/banner.png'",
          alt: props.title
        }
      ]
    },
    twitter: {
      cardType: props.image
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <NextSeo {...pageMeta} />
      <Header />
      <main
        id="skip"
        className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"
      >
        {props.children}
        <Footer />
      </main>
    </div>
  );
}
