import { NextSeo } from 'next-seo';
import Footer from '@/components/Footer';
import MobileMenu from '@/components/MobileMenu';
import { IContainerProps } from '@/typings/types';
import NavItem from '@/components/NavItem';
import { useRouter } from 'next/router';
import ToggleMode from '@/components/ToggleMode';

import { NAV_LINKS } from '@/config';

export default function Container(props: IContainerProps) {
  // Preparing metadata passing into NextSeo

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
      <div className="flex flex-col justify-center px-8">
        <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 bg-gray-50  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>
          <div className="ml-[-0.60rem">
            <MobileMenu />
            {NAV_LINKS.map((item, index) => (
              <NavItem key={index} href={item.href} text={item.text} />
            ))}
          </div>
          <ToggleMode />
        </nav>
      </div>
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
