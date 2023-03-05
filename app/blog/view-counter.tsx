import 'server-only';
import { Suspense, cache } from 'react';
import { db } from 'lib/planetscale';
import TrackView from './track-view';

export const getViews = cache(async () => {
  return db.selectFrom('views').select(['slug', 'count']).execute();
});

export default async function ViewCounter({
  slug,
  trackView,
}: {
  slug: string;
  trackView?: boolean;
}) {
  const data = await getViews();
  const viewsForSlug = data && data.find((view) => view.slug === slug);
  const number = new Number(viewsForSlug?.count || 0);

  return (
    <>
      {trackView ? <TrackView slug={slug} /> : null}
      <Suspense fallback=" ">
        <p className="font-mono text-sm text-neutral-500 tracking-tighter">
          {`${number.toLocaleString()} views`}
        </p>
      </Suspense>
    </>
  );
}
