import Container from '@/components/Container';
import StackIcon, { STACKS } from '@/components/StackIcon';
import TypewriterEffect from '@/components/TypewriterEffect';
import WakaStats from '@/components/WakaStats';
import { getWakaStats } from '@/lib/waka-api';
import { IWakaLangStats } from '@/typings';
import Image from 'next/future/image';
import { useMemo } from 'react';
import { IconContext } from 'react-icons';
import { shimmer, toBase64 } from '@/lib/image-utils';

export default function IndexPage({ stats }: { stats: IWakaLangStats[] }) {
  const memoizedStacks = useMemo(() => STACKS.filter((el) => el.featured), []);
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
                  I specialise in turning ideas into{' '}
                  <span className="font-semibold italic">real life </span>
                  products.
                </h2>
              </div>
            </div>

            <p className="text-gray-900 dark:text-gray-100 md:text-lg mt-4 md:mt-10">
              A full-stack developer passionate about React ecosystem,
              TypeScript and serverless backends.
            </p>
          </div>
          <div className="hidden md:block">
            <Image
              alt="Dzmitry Svirin"
              src="/me.webp"
              width={600}
              height={200}
              className="rounded-md"
              quality={80}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(600, 200)
              )}`}
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
              10+ years of experience building products for clients across
              several countries;
            </li>
            <li className="text-gray-700 dark:text-gray-400 md:text-lg">
              currently working remotely for existing clients being open for new
              opportunities;
            </li>
            <li className="text-gray-700 dark:text-gray-400 md:text-lg">
              located in Tbilisi, 🇬🇪. I enjoy cycling, swimming and good books;
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl mt-2 tracking-tight text-gray-700 dark:text-gray-200 font-normal">
            My values:
          </h2>
          <ul className="list-inside  list-[square] pt-2 pb-6 [&>*]:py-[0.1rem]">
            <li className="text-gray-700 dark:text-gray-400 md:text-lg">
              deliver logical, efficient code, following best practices;
            </li>
            <li className="text-gray-700 dark:text-gray-400 md:text-lg">
              consistency over speed;
            </li>
            <li className="text-gray-700 dark:text-gray-400 md:text-lg">
              honesty, reliability, responsibility;
            </li>
            <li className="text-gray-700 dark:text-gray-400 md:text-lg">
              stay curious;
            </li>
          </ul>
          <h2 className="text-xl md:text-2xl mb-4 mt-2 tracking-tight text-gray-700 dark:text-gray-200 font-normal ">
            Technologies I use frequently:
          </h2>
          <div className="grid grid-cols-6 md:grid-cols-8 items-center place-content-between max-w-2xl gap-x-12 gap-y-6 mx-auto w-full">
            <IconContext.Provider
              value={{
                className:
                  'w-7 h-7 md:w-8 md:h-8  fill-gray-700  dark:fill-gray-400  hover:fill-gray-800 dark:hover:fill-gray-200'
              }}
            >
              {memoizedStacks.map((el, index) => (
                <StackIcon key={index} iconTitle={el.iconTitle} isLink={true} />
              ))}
            </IconContext.Provider>
          </div>
          <h2 className="text-xl md:text-2xl mb-3 mt-10 tracking-tight text-gray-700 dark:text-gray-200 font-normal">
            Some stats:
          </h2>
          <WakaStats stats={stats} />
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
  const { languages } = await getWakaStats();

  return { props: { stats: languages }, revalidate: 86400 };
}
