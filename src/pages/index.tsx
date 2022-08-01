import Image from 'next/future/image';
import Link from 'next/link';
import Container from '@/components/Container';
import Twemoji from '@/components/Twemoji';
import TypewriterEffect from '@/components/TypewriterEffect';

export default function Home() {
  return (
    <Container title="Index page | Dzmitry Svirin">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="text-3xl md:text-5xl tracking-tight capsize text-black dark:text-white mb-6 font-bold">
              Hi, I am Dzmitry&nbsp;
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 tracking-tight text-gray-800 dark:text-gray-200 font-medium">
              I <em>build</em> things for the web.
            </h2>
            <p className="text-gray-700 dark:text-gray-400 mb-2">
              I&apos;m a full-stack developer passionate about TypeScript, React
              ecosystem and databases.
            </p>

            <p className="text-gray-700 dark:text-gray-400 mb-2">
              I&apos;m a full-stack developer passionate about TypeScript, React
              ecosystem and databases.
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Dzmitry Svirin"
              height={176}
              width={176}
              src="/svirins-42.jpg"
              className="rounded-full "
              sizes="30vw"
              priority
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto pb-16 w-full">
          <div className="flex flex-col items-start">
            <p className="text-gray-700 dark:text-gray-400 mb-2">
              La croix 8-bit skateboard ea before they sold out aliqua hot
              chicken in hella gochujang meggings truffaut four dollar toast
              labore. Plaid small batch VHS vaporware shoreditch esse.
              Succulents enamel pin la croix four dollar toast affogato
              cold-pressed. Distillery literally sint locavore pork belly
              activated charcoal. Tonx vice crucifix cliche.
            </p>
            <p className="text-gray-700 dark:text-gray-400 mb-2">
              Fugiat neutra +1 disrupt listicle cold-pressed freegan yes plz
              twee enamel pin chia excepteur vape. Fashion axe polaroid
              shoreditch est. Tilde in woke anim subway tile helvetica jean
              shorts praxis ut trust fund pop-up knausgaard. Magnas aliqua
              whatever tote bag veniam.{' '}
            </p>

            <ul className="list-inside list-disc py-4 [&>*]:py-1">
              <li className="text-gray-600 dark:text-gray-400">
                <Link href="/about">
                  <a
                    className="transition-all  duration-150 hover:text-gray-800 dark:hover:text-gray-200 ease-in-out "
                    href="https://twitter.com/svirins"
                  >
                    Skills & experience
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 ml-1 inline-flex"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                      />
                    </svg>
                  </a>
                </Link>
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                <Link href="/blog">
                  <a
                    className="transition-all  duration-150 hover:text-gray-800 dark:hover:text-gray-200 ease-in-out "
                    href="https://twitter.com/svirins"
                  >
                    My thoughts
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 ml-1 inline-flex"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                      />
                    </svg>
                  </a>
                </Link>
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                <Link href="/snippets">
                  <a
                    className="transition-all  duration-150 hover:text-gray-800 dark:hover:text-gray-200 ease-in-out "
                    href="https://twitter.com/svirins"
                  >
                    Collected snippets
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 ml-1 inline-flex"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                      />
                    </svg>
                  </a>
                </Link>
              </li>
            </ul>

            <p className=" mt-2">
              <TypewriterEffect />
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
