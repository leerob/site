import Container from '@/components/Container';
import StackIcon, { STACKS } from '@/components/StackIcon';
import TypewriterEffect from '@/components/TypewriterEffect';
import WakaStats from '@/components/WakaStats';
import { getWakaStats } from '@/lib/waka-api';
import { IWakaLangStats } from '@/typings';
import Image from 'next/future/image';
import { useMemo } from 'react';
import PageHeading from '@/components/PageHeading';

export default function IndexPage({ stats }: { stats: IWakaLangStats[] }) {
  const memoizedStacks = useMemo(() => STACKS.filter((el) => el.featured), []);
  return (
    <Container title="About me page | Dzmitry Svirin - svirins.codes">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full">
        <div className="md:grid md:grid-cols-5">
          <div className="md:col-span-4 ">
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full">
              <div className="flex flex-col items-start">
                <h1 className="text-3xl md:text-5xl tracking-tight mb-4 font-bold">
                  Hi, I&apos;am{' '}
                  <span className="text-signal dark:text-signal-dark">
                    Dzmitry
                  </span>
                </h1>
                <h2 className="text-[22px] md:text-2xl tracking-tight text-gray-900 dark:text-gray-100 font-normal">
                  I specialise in turning ideas into{' '}
                  <span className="font-semibold italic">real life </span>
                  products.
                </h2>
              </div>
            </div>

            <p className="text-gray-900 dark:text-gray-100 text-lg mt-4 md:mt-10">
              A full-stack developer passionate about React ecosystem,
              TypeScript and serverless backends.
            </p>
          </div>
          <div className="hidden md:block">
            <Image
              alt="Dzmitry Svirin"
              src="/me.webp"
              width={300}
              height={200}
              className="rounded-md"
              priority
            />
          </div>
        </div>
      </div>
      <hr className="w-full  max-w-2xl mx-auto  border-1 border-gray-200 dark:border-gray-800 mt-4" />

      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto pb-16 w-full">
        <div className="flex flex-col items-start">
          <h2 className="text-xl md:text-2xl mt-4 tracking-tight text-gray-700 dark:text-gray-200 font-normal">
            Quick summary:
          </h2>
          <ul className="list-inside list-[square] pt-2 pb-6 [&>*]:py-[0.2rem]">
            <li className="text-gray-700 dark:text-gray-400 text-lg">
              over a decade of experience building products for clients across
              several countries;
            </li>
            <li className="text-gray-700 dark:text-gray-400 text-lg">
              I am currently working remotely with my existing clients being
              open for new opportunities;
            </li>
            <li className="text-gray-700 dark:text-gray-400 text-lg">
              located in <span className="font-medium">Tbilisi</span>, 🇬🇪. I
              enjoy cycling, swimming and good books;
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl mt-2 tracking-tight text-gray-700 dark:text-gray-200 font-normal">
            My values:
          </h2>
          <ul className="list-inside  list-[square] pt-2 pb-6 [&>*]:py-[0.2rem]">
            <li className="text-gray-700 dark:text-gray-400 text-lg">
              deliver logical, efficientd code, following best practices;
            </li>
            <li className="text-gray-700 dark:text-gray-400 text-lg">
              consistency over speed;
            </li>
            <li className="text-gray-700 dark:text-gray-400 text-lg">
              honesty, reliability, responsibility;
            </li>
            <li className="text-gray-700 dark:text-gray-400 text-lg">
              stay curious;
            </li>
          </ul>
          <h2 className="text-xl md:text-2xl mb-4 mt-2 tracking-tight text-gray-700 dark:text-gray-200 font-normal ">
            Technologies I use frequently:
          </h2>
          <div className="grid grid-cols-6 md:grid-cols-8 items-center place-content-between max-w-2xl gap-x-12 gap-y-6 mx-auto w-full">
            {memoizedStacks.map((el, index) => (
              <StackIcon key={index} iconTitle={el.iconTitle} isLink={true} />
            ))}
          </div>
          <h2 className="text-xl md:text-2xl mb-3 mt-10 tracking-tight text-gray-700 dark:text-gray-200 font-normal">
            Some stats:
          </h2>
          <WakaStats stats={stats} />
          <h2 className="text-xl md:text-2xl mb-4 mt-8 tracking-tight text-gray-700 dark:text-gray-200 font-nornal">
            Uses:
          </h2>
          <Image
            width={800}
            height={600}
            alt={`Cover Image}`}
            src="/uses-1.jpeg"
            className="grayscale hover:grayscale-0 rounded-lg transition-all duration-300 ease-out shadow-md"
          />
          <h2 className="text-xl md:text-2xl mt-8 tracking-tight text-gray-700 dark:text-gray-200 font-normal">
            Feel free to ask me <em>anything</em>:
          </h2>
          <ul className="list-inside  list-[square] pt-2 pb-6 [&>*]:py-[0.2rem]">
            <li className="text-gray-700 dark:text-gray-400 text-lg">
              Twitter:{' '}
              <a
                className="transition-all  duration-150 hover:text-gray-800 dark:hover:text-gray-200 ease-in-out "
                href="https://twitter.com/svirins"
              >
                @svirins
              </a>
            </li>
            <li className="text-gray-700 dark:text-gray-400 text-lg">
              GitHub:{' '}
              <a
                className="transition-all  duration-150 hover:text-gray-800 dark:hover:text-gray-200 ease-in-out "
                href="https://github.com/svirins"
              >
                @svirins
              </a>
            </li>
            <li className="text-gray-700 dark:text-gray-400 text-lg">
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
