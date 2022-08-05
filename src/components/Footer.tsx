import NowPlaying from '@/components/NowPlaying';
import { SOCIALS } from '@/components/StackIcon';

export default function Footer() {
  return (
    <footer className="flex flex-col items-start  md:items-center  max-w-2xl w-full mx-auto mb-4">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-4" />
      <NowPlaying />
      <div className="flex my-2 space-x-4">
        {SOCIALS.map((social, index) => (
          <a
            key={index}
            href={social.url}
            className="duration-150 fill-gray-700  dark:fill-gray-400  transform  ease-in-out hover:scale-110"
          >
            {social.Icon}
          </a>
        ))}
      </div>

      <p className=" text-gray-500 dark:text-gray-400 mb-1  text-left md:text-center text-xs">
        © <span className="font-medium">{new Date().getFullYear()}</span>
        <span>{` • `}</span>
        Dzmitry Svirin
      </p>
      <p className="w-full text-xs text-gray-500 dark:text-gray-400 text-left md:text-center font-thin">
        <span>The code of this site was originally a fork of </span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-300  font-medium link link-underline link-underline-gradient"
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
