import { NowPlaying } from '@/app/ui/NowPlaying';
import { SocialIcons } from '@/app/ui/Icons';
import { Suspense } from 'react';

export default function Footer() {
  return (
    <footer className="flex flex-col items-start  md:items-center  max-w-2xl w-full mx-auto mb-4">
      <hr className="w-full border-1  border-gray-800 mb-4" />
      <Suspense
        fallback={
          <p className="text-gray-300  text-sm text-left items-start">
            Loading player...
          </p>
        }
      >
        <NowPlaying />
      </Suspense>
      <div className="flex my-2 space-x-4">
        <SocialIcons />
      </div>
      <p className="  text-gray-400 mb-1 pt-2  text-left md:text-center text-xs">
        © <span className="font-medium">{new Date().getFullYear()}</span>
        <span>{` • `}</span>
        Dzmitry Svirin{` • `}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className=" text-gray-300  font-medium link-underline link-underline-gradient"
          href="https://svirins.codes/feed.xml"
        >
          RSS
        </a>
      </p>
      <p className="w-full  text-xs  text-gray-400 text-left md:text-center">
        <span>The code of this site was originally a fork of </span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className=" text-gray-300  font-medium link-underline link-underline-gradient"
          href="https://leerob.io"
        >
          Lee Robinson
        </a>
        {` `}personal site,
        <span>almost entirely rewritten.</span>
      </p>
    </footer>
  );
}

