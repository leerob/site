import { Suspense, cache } from 'react';
import { queryBuilder } from 'lib/planetscale';

export const getViews = cache(async () => {
  return queryBuilder.selectFrom('views').select(['slug', 'count']).execute();
});

export const increment = cache(async (slug: string) => {
  const data = await queryBuilder
    .selectFrom('views')
    .where('slug', '=', slug)
    .select(['count'])
    .execute();

  const views = !data.length ? 0 : Number(data[0].count);

  return queryBuilder
    .insertInto('views')
    .values({ slug, count: 1 })
    .onDuplicateKeyUpdate({ count: views + 1 })
    .execute();
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

  if (trackView) {
    await increment(slug);
  }

  return (
    <Suspense fallback=" ">
      <p className="font-mono text-sm text-neutral-500 tracking-tighter">
        {`${number.toLocaleString()} views`}
      </p>
    </Suspense>
  );
}
