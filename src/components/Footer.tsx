import NowPlaying from '@/components/NowPlaying';
import { SiTwitter, SiGithub, SiGmail } from 'react-icons/si';
import cn from 'classnames';

export default function Footer() {
  return (
    <footer className="flex flex-col items-start  md:items-center  max-w-2xl w-full mx-auto mb-4">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-4" />
      <NowPlaying />
      <div className="flex mb-4 space-x-4">
        <a
          className={cn(
            'delay-100 fill-gray-800 hover:fill-pink-400  dark:fill-gray-100 dark:hover:fill-emerald-400  transform  duration-150'
          )}
          href="https://twitter.com/svirins"
        >
          <SiTwitter />
        </a>
        <a
          className={cn(
            'delay-100 fill-gray-800 hover:fill-pink-400  dark:fill-gray-100 dark:hover:fill-emerald-400  transform  duration-150 '
          )}
          href="https://github.com/zvirinz"
        >
          <SiGithub />
        </a>
        <a
          className={cn(
            'delay-100 fill-gray-800 hover:fill-pink-400  dark:fill-gray-100 dark:hover:fill-emerald-400  transform  duration-150 '
          )}
          href="mailto:svirins@gmail.com"
        >
          <SiGmail />
        </a>
      </div>

      <p className=" text-sm text-gray-500 dark:text-gray-400 mb-4">
        Copyright ©{' '}
        <span className="font-medium">{new Date().getFullYear()}</span>
        <span>{` • `}</span>
        Dzmitry Svirin
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        <span>The code of this site was originally a fork of </span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-200 hover:text-emerald-500 dark:hover:text-emerald-400 font-medium"
          href="https://leerob.io"
        >
          Lee Robinson
        </a>
        <span> personal site </span>
        <span>though massivle refactored</span>
      </p>
    </footer>
  );
}
