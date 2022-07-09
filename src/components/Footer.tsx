import NowPlaying from '@/components/NowPlaying';
import { SiTwitter, SiGithub, SiGmail } from 'react-icons/si';
import ExternalLink from '@/components/ExternalLink';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <NowPlaying />
      <div className="w-full max-w-2xl items-center flex-row ">
        <ExternalLink href="https://twitter.com/svirins">
          <SiTwitter />
        </ExternalLink>
        <ExternalLink href="https://github.com/zvirinz">
          <SiGithub />
        </ExternalLink>
        <ExternalLink href="mailto:svirins@gmail.com">
          <SiGmail />
        </ExternalLink>
      </div>
      <div className="flex my-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <div>{`Copyright © ${new Date().getFullYear()}`}</div>
        <span>{` • `}</span>
        <Link href="/">Dzmitry Svirin</Link>
      </div>
      <div className="text-gray-700 dark:text-gray-200">
        The codebase of this site codebase was originally created from a forl a
        fork of leerob.io , however deeply refacored. my deepest thanks to Lee
        Robinson
      </div>
    </footer>
  );
}
