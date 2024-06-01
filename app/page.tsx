import { Suspense } from 'react';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import Image from 'next/image';
import meAttendingEchai from 'public/images/home/meAttendingEchai.jpg';
import ethIndiaTimeswapTeamPhoto from 'public/images/home/ethIndiaTimeswapTeamPhoto.jpg';
import meExplainingTechPhoto from 'public/images/home/meExplainingTechPhoto.jpg';
import meAtWorldStartupConvention from 'public/images/home/meAtWorldStartupConvention.jpg';
import meAtIIITD from 'public/images/home/meAtIIITD.jpg';
import meExplainingWeb3 from 'public/images/home/meExplainingWeb3.jpg';

import TLEEliminators_LogoText from 'public/images/TLEEliminators_LogoText.png';
import Foodoscope_LogoText from 'public/images/Foodoscope_LogoText.png';

import DexyAI_LogoText from 'public/images/DexyAI_LogoText.svg';
import Timeswap_LogoText from 'public/images/Timeswap_LogoText.svg';
import vercel from 'public/images/home/vercel.jpg';
import avatar from 'app/avatar.jpg';
import ViewCounter from 'app/utils/blog/view-counter';
import { PreloadResources } from 'app/preload';
import {
  getViewsCount,
} from 'app/db/queries';
import { SOCIAL_MEDIA } from './utils/helpers';

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

// function ChannelLink({ img, link, name }) {
//   return (
//     <div className="group flex w-full">
//       <a
//         href={link}
//         target="_blank"
//         className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
//       >
//         <div className="flex items-center space-x-3">
//           <div className="relative h-16">
//             <Image
//               alt={name}
//               src={img}
//               height={64}
//               width={64}
//               sizes="33vw"
//               className="h-16 w-16 rounded-full border border-neutral-200 dark:border-neutral-700"
//               priority
//             />
//             <div className="relative -right-10 -top-6 inline-flex h-6 w-6 items-center rounded-full border border-neutral-200 bg-white p-1 dark:border-neutral-700">
//               <svg width="15" height="11" role="img" aria-label="YouTube logo">
//                 <use href="/sprite.svg#youtube" />
//               </svg>
//             </div>
//           </div>
//           <div className="flex flex-col">
//             <p className="font-medium text-neutral-900 dark:text-neutral-100">
//               {name}
//             </p>
//             <Suspense fallback={<p className="h-6" />}>
//             </Suspense>
//           </div>
//         </div>
//         <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
//           <ArrowIcon />
//         </div>
//       </a>
//     </div>
//   );
// }

// async function Subs({ name }: { name: string }) {
//   noStore();
//   let subscribers;
//   if (name === '@leerob') {
//     subscribers = await getLeeYouTubeSubs();
//   } else {
//     subscribers = await getVercelYouTubeSubs();
//   }

//   return (
//     <p className="text-neutral-600 dark:text-neutral-400">
//       {subscribers} subscribers
//     </p>
//   );
// }

function BlogLink({ slug, name }) {
  return (
    <div className="group">
      <a
        href={`/blog/${slug}`}
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex flex-col">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          <Suspense fallback={<p className="h-6" />}>
            <Views slug={slug} />
          </Suspense>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();
  return <ViewCounter allViews={views} slug={slug} />;
}

export default function Page() {
  return (
    <section>
      <PreloadResources />
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        Hey, I'm Heemank Verma 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a defi full stack developer, startup nerd, and optimist. I currently `}
        <Link href="/work">work</Link>
        {` as the Full Stack Dev at `}
        <span className="not-prose">
          <Badge href="https://timeswap.io">
            <svg
              width="15"
              height="11"
              aria-label="Timeswap logo"
              className="mr-1 inline-flex"
            >
              <use href="/sprite.svg#youtube" />
            </svg>
            Timeswap
          </Badge>
        </span>
        .
      </p>
      <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
        <div className="relative h-40">
          <Image
            alt="Me with the Timeswap Team at the EthIndia 2022 Hackathon."
            src={ethIndiaTimeswapTeamPhoto}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative sm:row-span-2 row-span-1">
          <Image
            alt="Giving Symposym Presentation about Foodoscope.com"
            src={meExplainingTechPhoto}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative">
          <Image
            alt="Attending World zStartup Convention in 2023."
            src={meAtWorldStartupConvention}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="Me at IIITD, New Delhi, India."
            src={meAtIIITD}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover sm:object-center"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="Me explaining Web3 at a conference."
            src={meExplainingWeb3}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40">
          <Image
            alt="Me attending Echai, a startup event."
            src={meAttendingEchai}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I like to work on projects that are challenging and have a positive business impact.
          I'm passionate about building products that solve real-world problems
          and have a positive impact on society.
        </p>
      </div>
      {/* <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <ChannelLink
          img={avatar}
          name="@leerob"
          link="https://www.youtube.com/@leerob"
        />
        <ChannelLink
          img={vercel}
          name="@vercel"
          link="https://www.youtube.com/@vercelhq"
        />
      </div> */}
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Over the past 4 years,
          I completed my B.Tech in Computer Science from IIITD, New Delhi, India.
        </p>
        <p>
           I've written code, built products, and led
          teams. I've been fortunate to work with some amazing people and
          companies.

          I've worked with and advised companies on building scalable web applications,
          building open-source communities, product-led growth, and more.
         
        </p>
      </div>
      {/* <div className="my-8 flex w-full flex-col space-y-4">
        <BlogLink
          name="What Makes A Great Developer Experience?"
          slug="developer-experience"
        />
        <BlogLink name="What is Developer Relations?" slug="devrel" />
        <BlogLink name="The Story of Heroku" slug="heroku" />
      </div> */}
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm always open to new opportunities and challenges. If you're working
          on something cool,{' '}
          {/* TODO: make contact page */}
          <Link href="/contact">get in touch</Link>!
        </p>
      </div>
      <div className="my-8 flex h-14 w-full flex-row space-x-2 overflow-x-auto">
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://timeswap.io">
            <Image
              width={100}
              height={100}
            src={Timeswap_LogoText} alt="Timeswap Logo" />
          </a>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://www.tle-eliminators.com/">
            <span className='flex items-center gap-x-1 font-bold text-sm'>
            <Image src={TLEEliminators_LogoText}
              width={24}
              height={60}
            alt="TLE Eliminators Logo" /> 
            TLE Eliminators
            </span>
          </a>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://meetdexy.ai/">
            <Image
              width={90}
              height={90}
              className='pt-2'
            src={DexyAI_LogoText} alt="Dexy AI Logo" />
          </a>
        </div>
       
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
        <a href="https://www.foodoscope.com/">
            <span className='flex items-center gap-x-1 font-bold'>
            <Image
              width={100}
              height={90}
            src={Foodoscope_LogoText} alt="Foodoscope Logo" /> 
            </span>
          </a>
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
      
      </div>
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href={SOCIAL_MEDIA.twitter}
          >
            <ArrowIcon />
            <p className="ml-2 h-7">follow me</p>
          </a>
        </li>
        {/* <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://leerob.substack.com"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">get email updates</p>
          </a>
        </li> */}
      </ul>
    </section>
  );
}
