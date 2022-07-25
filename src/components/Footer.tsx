import NowPlaying from '@/components/NowPlaying';
import { SOCIALS } from '@/components/StackIcon';

export default function Footer() {
  return (
    <footer className="flex flex-col items-start  md:items-center  max-w-2xl w-full mx-auto mb-4">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-4" />
      <NowPlaying />
      <div className="flex my-4 space-x-6">
        {SOCIALS.map((social, index) => (
          <a key={index} href={social.url}>
            {social.Icon}
          </a>
        ))}
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center">
        Copyright ©{' '}
        <span className="font-medium">{new Date().getFullYear()}</span>
        <span>{` • `}</span>
        Dzmitry Svirin
      </p>
      <p className="w-full text-sm text-gray-500 dark:text-gray-400 text-center">
        <span>The code of this site was originally a fork of </span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-200 hover:text-signal dark:hover:text-signal font-medium"
          href="https://leerob.io"
        >
          Lee Robinson{` `}
        </a>
        personal site, <br />
        <span>almnost completely rewritten consequently.</span>
      </p>
    </footer>
  );
}
