import Image from 'next/image';
import { Typewriter } from '@/app/ui/Typewriter';
import { WakaStats } from '@/app/ui/WakaStats';
import { Metadata } from 'next';
import { MyStacks } from '@/app/ui/Icons';


export const metadata: Metadata = {
  title: `Dzmitry Sviryn's personal website`,
  description:
    'A full-stack developer passionate about React ecosystem, TypeScript and serverless backends',
  generator: 'Next.js',
  applicationName: 'My dev site',
  keywords: ['Next.js', 'TypeScript', 'Dev blog'],
  authors: [{ name: 'Dzmitry Sviryn', url: 'https://github.com/svirins' }]
};

export default function IndexPage() {
  return (
    <>
      <div className="flex flex-col  max-w-2xl mx-auto w-full">
        <div className="md:grid md:grid-cols-5">
          <div className="md:col-span-4 ">
            <div className="flex flex-col  max-w-2xl mx-auto w-full">
              <div className="flex flex-col items-start">
                <h1 className="text-3xl md:text-5xl tracking-tight mb-4 capsize font-bold  text-gray-100">
                  Hi, I&apos;m <span className="text-active">Dzmitry</span>
                </h1>
                <h2 className="text-[22px] md:text-2xl tracking-tight text-gray-100 font-normal">
                  I specialize in turning ideas into{' '}
                  <span className="font-semibold italic">real-life </span>
                  products.
                </h2>
              </div>
            </div>

            <p className="text-gray-100 font-semibold md:text-lg mt-4 md:mt-10">
              Full-stack developer with a passion for the React ecosystem,
              TypeScript, and serverless backends.
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
      <hr className="w-full  max-w-2xl mx-auto  border-1 border-gray-800 mt-4" />

      <div className="flex flex-col max-w-2xl mx-auto pb-16 w-full">
        <div className="flex flex-col">
          <h2 className="text-xl md:text-2xl mt-4 tracking-tight text-gray-200 font-normal">
            In short:
          </h2>
          <ul className="list-inside list-[square] pt-2 pb-6 [&>*]:py-[0.1rem]">
            <li className=" text-gray-400 md:text-lg">
              10+ years of building products for clients across several
              countries;
            </li>
            <li className=" text-gray-400 md:text-lg">
              currently working with regular clients, but open to new
              opportunities;
            </li>
            <li className=" text-gray-400 md:text-lg">
              I live in Batumi{' '}
              <span role="img" aria-label="wave">
                🌊
              </span>
              <span role="img" aria-label="sun">
                🔆
              </span>
              <span role="img" aria-label="georgia flag">
                🇬🇪
              </span>{' '}
              and enjoy swimming, mountains and good movies;
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl mt-2 tracking-tight  text-gray-200 font-normal">
            My values:
          </h2>
          <ul className="list-inside  list-[square] pt-2 pb-6 [&>*]:py-[0.1rem]">
            <li className=" text-gray-400 md:text-lg">
              consistency over speed;
            </li>
            <li className=" text-gray-400 md:text-lg">
              honesty, reliability, responsibility;
            </li>
            <li className=" text-gray-400 md:text-lg">
              keep coding standards and best practices;
            </li>
            <li className=" text-gray-400 md:text-lg">
              be curious, learn iteratively;
            </li>
          </ul>
          <h2 className="text-xl md:text-2xl mb-5 mt-2 tracking-tight  text-gray-200 font-normal ">
            Technologies I use frequently:
          </h2>
          <MyStacks />
          <WakaStats />
          <h2 className="text-xl md:text-2xl mt-8 tracking-tight  text-gray-200 font-normal">
            Get in touch:
          </h2>
          <ul className="list-inside  list-[square] pt-2 pb-6 [&>*]:py-[0.1rem]">
            <li className=" text-gray-400 md:text-lg">
              Twitter:{' '}
              <a
                className="  text-gray-300  font-medium link-underline link-underline-gradient"
                href="https://twitter.com/svirins"
              >
                @svirins
              </a>
            </li>
            <li className=" text-gray-400 md:text-lg">
              GitHub:{' '}
              <a
                className="  text-gray-300  font-medium link-underline link-underline-gradient"
                href="https://github.com/svirins"
              >
                @svirins
              </a>
            </li>
            <li className=" text-gray-400 md:text-lg">
              Email:{' '}
              <a
                className="  text-gray-300  font-medium  link-underline link-underline-gradient"
                href="mailto:svirins@gmail.com"
              >
                svirins@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <p className="mt-2">
          <Typewriter />
        </p>
      </div>
    </>
  );
}
