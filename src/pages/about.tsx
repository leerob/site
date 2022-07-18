import Image from 'next/future/image';
import { getWakaStats } from '@/lib/waka-api';
import Container from '@/components/Container';
import { IWakaLangStats } from '@/typings';
import Twemoji from '@/components/Twemoji';

import WakaStats from '@/components/Stats';
import { useMemo } from 'react';
import StackIcon, { STACKS } from '@/components/StackIcon';
// TODO: mention Sanity is stacks
export default function About({ stats }: { stats: IWakaLangStats[] }) {
  const memoizedStacks = useMemo(() => STACKS, []);
  return (
    <Container title="About page | Dzmitry Svirin">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto pb-16 w-full">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              Hi, I am Dzmitry&nbsp;
              <Twemoji emoji="👋" />
            </h1>
            <h1 className="text-gray-700 dark:text-gray-200 mb-4">
              I <em>build</em> things for the web.
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I&apos;m a full-stack developer passionate about TypeScript, React
              ecosystem and databases.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Currently, self-employed freelance programmer, based in Tbilisi,
              🇬🇪
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              In my free time I enjoy, cycling, swimming and good books.
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              I&apos;m a passionate Full-Stack dmeveloper living in Tbilisi,
              Georgia. During my free time I like swimming I&apos;m a Full Stack
              developer with experience in React ecosystem. Currently
              self-employed and living in Tbilisi.
            </p>
          </div>
          <div className="w-[176px] sm:w-[256px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Dzmitry Svirin"
              height={176}
              width={176}
              src="/svirins.webp"
              sizes="30vw"
              priority
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto pb-16 w-full">
        <div className="flex flex-col items-start">
          <h1 className="text-gray-700 dark:text-gray-200 mb-4">
            Technologies I use every day, frequently and from time to time:
          </h1>
          <div className="grid overflow-hidden grid-cols-10 grid-rows-2 gap-4 justify-center">
            {memoizedStacks.map((el, index) => (
              <StackIcon key={index} iconTitle={el.iconTitle} isLink={true} />
            ))}
          </div>
          <h1 className="text-gray-700 dark:text-gray-200 mb-4">
            Weekly coding stats:
          </h1>
          <div className="w-32 h-32 md:w-48 md:h-48">
            <WakaStats stats={stats} />
          </div>
          <div className="prose dark:prose-dark">
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Get in touch:
            </h2>
            <p>Feel free to ask me anything!</p>
            <ul>
              <li>
                Twitter: <a href="https://twitter.com/svirins">@svirins</a>
              </li>
              <li>
                GitHub: <a href="https://github.com/svirins">@zvirinz</a>
              </li>
              <li>
                Mail:
                <a href="mailto:svirins@gmail.com">svirins@gmail.com</a>
              </li>
            </ul>
            <h2>Bio</h2>
            <h3>Job Title</h3>
          </div>
        </div>
      </div>
      <span className="h-16" />
    </Container>
  );
}

export async function getStaticProps() {
  const { languages } = await getWakaStats();

  return { props: { stats: languages }, revalidate: 86400 };
}
