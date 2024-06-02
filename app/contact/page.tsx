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
import timeswap_logo from 'public/timeswap.svg';
import TLEEliminators_LogoText from 'public/images/TLEEliminators_LogoText.png';
import Foodoscope_LogoText from 'public/images/Foodoscope_LogoText.png';

import DexyAI_LogoText from 'public/images/DexyAI_LogoText.svg';
import Timeswap_LogoText from 'public/images/Timeswap_LogoText.svg';
import ViewCounter from 'app/utils/blog/view-counter';
import { PreloadResources } from 'app/preload';
import {
  getViewsCount,
} from 'app/db/queries';
import { SOCIAL_MEDIA } from '../utils/helpers';

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
        Here's my&nbsp; 
        <Link href="https://linktr.ee/heemankv"
          target='_blank'
          rel='noopener noreferrer'
        >Linktree</Link>
        .
      </p>
    </section>
  );
}
