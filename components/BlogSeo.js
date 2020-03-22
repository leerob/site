import React from 'react';
import { NextSeo, ArticleJsonLd } from 'next-seo';

import { dateTime } from '../utils/date-format';
import titleStyle from '../utils/title-style';

const BlogSeo = ({ title, summary, publishedAt, slug, image }) => {
  const formattedTitle = titleStyle(title);
  const date = dateTime(publishedAt);
  const url = `https://leerob.io/blog/${slug}`;
  const featuredImage = {
    url: `https://leerob.io${image}`,
    alt: formattedTitle
  };

  return (
    <>
      <NextSeo
        title={`${formattedTitle} – Lee Robinson`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date
          },
          url,
          title: formattedTitle,
          description: summary,
          images: [featuredImage]
        }}
      />
      <ArticleJsonLd
        authorName="Lee Robinson"
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[featuredImage]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName="Lee Robinson"
        title={formattedTitle}
        url={url}
      />
    </>
  );
};

export default BlogSeo;
