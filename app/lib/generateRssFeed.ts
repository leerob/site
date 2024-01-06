/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { Feed } from "feed";
import fs from "fs";

import { truncate } from "./contentUtils";
import { getPosts } from "./getPosts";
import { AUTHOR, LOCALIZED_RSS_DATA } from "./global.config";

const generateRssFeedPerLocale = async (locale: string) => {
  const posts = await getPosts(locale);
  const date = new Date();
  const isPl = locale === "pl" ? "/pl" : "";
  const { siteName, siteDescription, url } = LOCALIZED_RSS_DATA.find((i) => i.locale === locale)!;

  const feed = new Feed({
    title: siteName,
    description: siteDescription,
    id: url!,
    link: url,
    image: `${url}/logo.webp`,
    language: locale,
    favicon: `${url}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, Valeriy Grean`,
    updated: date,
    generator: "Feed for Node.js with some fancy extras",
    feedLinks: {
      rss2: `${url}/rss/feed.xml`,
      json: `${url}/rss/feed.json`,
      atom: `${url}/rss/atom.xml`,
    },
    author: AUTHOR,
  });

  posts.forEach((post) => {
    const link = `${url}/blog/${post.slug}`;
    feed.addItem({
      title: post.title,
      id: post.objectID,
      link,
      image: post.image,
      description: truncate(post.text.replace(/[\r\n]/gm, ""), 256),
      author: [post.author],
      date: new Date(post.publishedAt),
    });
  });
  fs.mkdirSync(`./public${isPl}/rss/`, { recursive: true });
  fs.writeFileSync(`./public${isPl}/rss/feed.xml`, feed.rss2());
  fs.writeFileSync(`./public${isPl}/rss/atom.xml`, feed.atom1());
  fs.writeFileSync(`./public${isPl}/rss/feed.json`, feed.json1());
};

export default async function generateRSSFeed() {
  // eslint-disable-next-line no-restricted-syntax
  for await (const i of LOCALIZED_RSS_DATA) {
    generateRssFeedPerLocale(i.locale);
  }
}

generateRSSFeed();
