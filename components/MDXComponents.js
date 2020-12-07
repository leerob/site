import Link from 'next/link';
import Image from 'next/image';
import Tweet from 'react-tweet-embed';

import ProsCard from '@/components/ProsCard';
import ConsCard from '@/components/ConsCard';
import Gumroad from '@/components/metrics/Gumroad';
import Unsplash from '@/components/metrics/Unsplash';
import Analytics from '@/components/metrics/Analytics';
import YouTube from '@/components/metrics/Youtube';
import ProjectCard from '@/components/ProjectCard';
import TopTracks from '@/components/TopTracks';
import Step from '@/components/Step';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  h2: (props) => (
    <h2 className="font-bold text-xl md:text-3xl mt-16 mb-4" {...props} />
  ),
  h3: (props) => (
    <h3 className="font-medium text-md md:text-xl mt-8 mb-4" {...props} />
  ),
  br: (props) => <div className="h-8" {...props} />,
  hr: (props) => (
    <div
      className="border border-gray-200 dark:border-gray-600 w-full my-8"
      {...props}
    />
  ),
  Image: (props) => (
    <div className="my-4">
      <Image {...props} />
    </div>
  ),
  table: (props) => (
    <div className="overflow-x-scroll w-full">
      <table className="text-left mt-32 w-full" {...props} />
    </div>
  ),
  th: (props) => (
    <th
      className="bg-gray-50 dark:bg-gray-900 font-bold p-2 text-sm"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="p-2 border-t border-gray-200 dark:border-gray-900 text-sm"
      {...props}
    />
  ),
  a: CustomLink,
  p: (props) => <p className="mt-4 spacing" {...props} />,
  ul: (props) => (
    <ul
      className="list-disc list-inside text-gray-700 dark:text-gray-400 pt-2 pl-4 ml-2 text-gray-900"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-disc list-inside text-gray-700 dark:text-gray-400 pt-2 pl-4 ml-2"
      {...props}
    />
  ),
  li: (props) => <li className="pb-1" {...props} />,
  Analytics,
  ConsCard,
  Gumroad,
  ProjectCard,
  ProsCard,
  Step,
  Tweet,
  TopTracks,
  Unsplash,
  YouTube
};

export default MDXComponents;
