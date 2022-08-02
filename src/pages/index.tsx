import Image from 'next/future/image';
import { getWakaStats } from '@/lib/waka-api';
import Container from '@/components/Container';
import { IWakaLangStats } from '@/typings';
import BlurredImage from '@/components/Image';
import WakaStats from '@/components/WakaStats';
import { useMemo } from 'react';
import StackIcon, { STACKS } from '@/components/StackIcon';
import TypewriterEffect from '@/components/TypewriterEffect';

export default function IndexPage({ stats }: { stats: IWakaLangStats[] }) {
  const memoizedStacks = useMemo(() => STACKS.filter((el) => el.featured), []);
  return (
    <Container title="About page | Dzmitry Svirin - svirins.codes">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="text-3xl md:text-5xl tracking-tight capsize text-black dark:text-white mb-6 font-bold">
              Hi, I&apos;am Dzmitry
            </h1>

            <ul className="list-inside  list-disc py-4 [&>*]:py-1">
              <li className="text-gray-700 dark:text-gray-400">
                A full-stack developer passionate about React ecosystem,
                TypeScript and serverless backends.
              </li>
              <li className="text-gray-700 dark:text-gray-400">
                Currently, self-employed person, based in{' '}
                <span className="font-medium">Tbilisi</span>, 🇬🇪
              </li>
              <li className="text-gray-700 dark:text-gray-400">
                In my free time I enjoy, cycling, swimming and good books.
              </li>
            </ul>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Dzmitry Svirin"
              height={176}
              width={176}
              src="/svirins-42.jpg"
              className="rounded-full"
              sizes="30vw"
              priority
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto pb-16 w-full">
        <div className="flex flex-col items-start">
          <h2 className="text-xl md:text-2xl mt-6 tracking-tight text-gray-700 dark:text-gray-200 font-medium">
            My <em>values</em>:
          </h2>
          <ul className="list-inside  list-disc py-4 [&>*]:py-1">
            <li className="text-gray-700 dark:text-gray-400">
              deliver logical, efficient, well-documented code, following best
              practices
            </li>
            <li className="text-gray-700 dark:text-gray-400">
              create value for business
            </li>
            <li className="text-gray-700 dark:text-gray-400">
              honesty, reliability, responsibility
            </li>
            <li className="text-gray-700 dark:text-gray-400">
              be a good person to myself and others
            </li>
            <li className="text-gray-700 dark:text-gray-400">
              learn iteratively
            </li>
          </ul>
          <h2 className="text-xl md:text-2xl mb-6 mt-2 tracking-tight text-gray-700 dark:text-gray-200 font-medium ">
            Technologies I use <em>frequently</em>:
          </h2>
          <div className="grid grid-cols-6 md:grid-cols-8 items-center place-content-between max-w-2xl gap-x-12 gap-y-6 mx-auto w-full">
            {memoizedStacks.map((el, index) => (
              <StackIcon key={index} iconTitle={el.iconTitle} isLink={true} />
            ))}
          </div>
          <h2 className="text-xl md:text-2xl mb-6 mt-8 tracking-tight text-gray-700 dark:text-gray-200 font-medium">
            Last week I was <em>coding</em> in:
          </h2>
          <WakaStats stats={stats} />
          <h2 className="text-xl md:text-2xl mb-6 mt-8 tracking-tight text-gray-700 dark:text-gray-200 font-medium">
            Uses:
          </h2>
          <BlurredImage
            src="/uses.jpeg"
            alt="My coding place"
            className="grayscale hover:grayscale-0"
          />
          <h2 className="text-xl md:text-2xl mt-6 tracking-tight text-gray-700 dark:text-gray-200 font-medium">
            Feel free to ask me <em>anything</em>:
          </h2>
          <ul className="list-inside list-disc py-4 [&>*]:py-1">
            <li className="text-gray-600 dark:text-gray-400">
              Twitter:{' '}
              <a
                className="transition-all  duration-150 hover:text-gray-800 dark:hover:text-gray-200 ease-in-out "
                href="https://twitter.com/svirins"
              >
                @svirins
              </a>
            </li>
            <li className="text-gray-600 dark:text-gray-400">
              GitHub:{' '}
              <a
                className="transition-all  duration-150 hover:text-gray-800 dark:hover:text-gray-200 ease-in-out "
                href="https://github.com/svirins"
              >
                @svirins
              </a>
            </li>
            <li className="text-gray-600 dark:text-gray-400">
              Mail:{' '}
              <a
                className="transition-all  duration-150 hover:text-gray-800 dark:hover:text-gray-200 ease-in-out "
                href="mailto:svirins@gmail.com"
              >
                svirins@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <p className="mt-2">
          <TypewriterEffect />
        </p>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const { languages } = await getWakaStats();
  return { props: { stats: languages }, revalidate: 86400 };
}
