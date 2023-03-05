'use client';

import { Suspense, useEffect } from 'react';
import { registerView } from './actions';
import { use } from 'react';

type View = {
  slug: string;
  count: string;
};

export default function ViewCounter({
  slug,
  trackView,
  views,
}: {
  slug: string;
  trackView: boolean;
  views: Promise<View[]>;
}) {
  useEffect(() => {
    if (trackView) {
      registerView(slug);
    }
  }, [slug]);

  const data = use(views);
  const viewsForSlug = data && data.find((view) => view.slug === slug);
  const number = new Number(viewsForSlug?.count || 0);

  return (
    <Suspense fallback=" ">
      <p className="font-mono text-sm text-neutral-500 tracking-tighter">
        {`${number.toLocaleString()} views`}
      </p>
    </Suspense>
  );
}
