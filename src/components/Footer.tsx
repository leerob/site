import Link from 'next/link';

import NowPlaying from '@/components/NowPlaying';
import ExternalLink from '@/components/ExternalLink';
import SocialIcon from './SocialIcon';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <NowPlaying />
      <div className="w-full max-w-2xl grid grid-cols-4 gap-1 pb-16">
        <Link href="/">Me</Link>
        <SocialIcon kind="twitter" href="https://twitter.com/svirins" />
        <SocialIcon kind="github" href="https://github.com/zvirinz" />
        <SocialIcon kind="mail" href="mailto:svirins@gmail.com" />
      </div>
      <div className=""></div>
    </footer>
  );
}
