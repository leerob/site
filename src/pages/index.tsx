import dynamic from 'next/dynamic';
import Image from 'next/future/image';
import { useMemo } from 'react';
import { Suspense } from 'react';
import { IconContext } from 'react-icons';

import Container from '@/components/Container';
import LoadingSpinner from '@/components/LoadingSpinner';
import StackIcon, { STACKS } from '@/components/StackIcon';
import TypewriterEffect from '@/components/TypewriterEffect';
import { getWakaStats } from '@/lib/waka-api';
import { IWakaApiResponse } from '@/typings';

export default function IndexPage({
  languages,
  totalHours
}: {
  languages: IWakaApiResponse[];
  totalHours: number;
}) {
  const memoizedStacks = useMemo(() => STACKS.filter((el) => el.featured), []);
  const DynamicWakaStats = dynamic(() => import('@/components/WakaStats'));
  return (
    <Container title="About me page | Dzmitry Svirin - svirins.codes">
      <div className="flex flex-col  max-w-2xl mx-auto w-full">
        <div className="md:grid md:grid-cols-5">
          <div className="md:col-span-4 ">
            <div className="flex flex-col  max-w-2xl mx-auto w-full">
              <div className="flex flex-col items-start">
                <h1 className="text-3xl md:text-5xl tracking-tight mb-4 capsize font-bold  text-gray-900 dark:text-gray-100">
                  Hi, I&apos;am <span className="text-active">Dzmitry</span>
                </h1>
                <h2 className="text-[22px] md:text-2xl tracking-tight text-gray-900 dark:text-gray-100 font-normal">
                  I specialize in turning ideas into{' '}
                  <span className="font-semibold italic">real life </span>
                  products.
                </h2>
              </div>
            </div>

            <p className="text-gray-900 dark:text-gray-100 font-semibold md:text-lg mt-4 md:mt-10">
              A full-stack developer passionate about React ecosystem,
              TypeScript and serverless backends.
            </p>
          </div>
          <div className="hidden md:block">
            <Image
              alt="Dzmitry Svirin"
              src="/me.webp"
              width={262}
              height={363}
              className="rounded-md"
              placeholder="blur"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              priority
            />
          </div>
        </div>
      </div>
      <hr className="w-full  max-w-2xl mx-auto  border-1 border-gray-200 dark:border-gray-800 mt-4" />

      <div className="flex flex-col max-w-2xl mx-auto pb-16 w-full">
        <div className="flex flex-col">
          <h2 className="text-xl md:text-2xl mt-4 tracking-tight text-gray-700 dark:text-gray-200 font-normal">
            In short:
          </h2>
          <ul className="list-inside list-[square] pt-2 pb-6 [&>*]:py-[0.1rem]">
            <li className="text-gray-700 dark:text-gray-400 md:text-lg">
              10+ years of building products for clients across several
              countries;
            </li>
            <li className="text-gray-700 dark:text-gray-400 md:text-lg">
              currently working with regular clients, but open to new
              opportunities;
            </li>
            <li className="text-gray-700 dark:text-gray-400 md:text-lg">
              I live in Batumi{' '}
              <span role="image" aria-label="georgia flag">
                🌊🔆🇬🇪
              </span>{' '}
              and enjoy swimming, mountains and good movies;
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl mt-2 tracking-tight text-gray-700 dark:text-gray-200 font-normal">
            My values:
          </h2>
          <ul className="list-inside  list-[square] pt-2 pb-6 [&>*]:py-[0.1rem]">
            <li className="text-gray-700 dark:text-gray-400 md:text-lg">
              consistency over speed;
            </li>
            <li className="text-gray-700 dark:text-gray-400 md:text-lg">
              honesty, reliability, responsibility;
            </li>
            <li className="text-gray-700 dark:text-gray-400 md:text-lg">
              keep coding standards and best practices;
            </li>
            <li className="text-gray-700 dark:text-gray-400 md:text-lg">
              be curious, learn iteratively;
            </li>
          </ul>
          <h2 className="text-xl md:text-2xl mb-4 mt-2 tracking-tight text-gray-700 dark:text-gray-200 font-normal ">
            Technologies I use frequently:
          </h2>
          <div className="grid grid-cols-6 md:grid-cols-8 items-center place-content-between max-w-2xl gap-x-12 gap-y-6 mx-auto w-full">
            <IconContext.Provider
              value={{
                className:
                  'w-7 h-7 md:w-8 md:h-8  fill-gray-700  dark:fill-gray-300  hover:fill-gray-800 dark:hover:fill-gray-200'
              }}
            >
              {memoizedStacks.map((el, index) => (
                <StackIcon key={index} iconTitle={el.iconTitle} isLink={true} />
              ))}
            </IconContext.Provider>
          </div>
          {totalHours > 8 && (
            <Suspense fallback={<LoadingSpinner />}>
              <DynamicWakaStats languages={languages} totalHours={totalHours} />
            </Suspense>
          )}

          <h2 className="text-xl md:text-2xl mt-8 tracking-tight text-gray-700 dark:text-gray-200 font-normal">
            Get in touch:
          </h2>
          <ul className="list-inside  list-[square] pt-2 pb-6 [&>*]:py-[0.1rem]">
            <li className="text-gray-700 dark:text-gray-400 md:text-lg">
              Twitter:{' '}
              <a
                className=" text-gray-800 dark:text-gray-300  font-medium link-underline link-underline-gradient"
                href="https://twitter.com/svirins"
              >
                @svirins
              </a>
            </li>
            <li className="text-gray-700 dark:text-gray-400 md:text-lg">
              GitHub:{' '}
              <a
                className=" text-gray-800 dark:text-gray-300  font-medium link-underline link-underline-gradient"
                href="https://github.com/svirins"
              >
                @svirins
              </a>
            </li>
            <li className="text-gray-700 dark:text-gray-400 md:text-lg">
              Mail:{' '}
              <a
                className=" text-gray-800 dark:text-gray-300  font-medium  link-underline link-underline-gradient"
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
  const data = await getWakaStats();
  return { props: { data: data }, revalidate: 86400 };
}
