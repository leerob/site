import { getViews } from 'lib/planetscale';

export default async function BlogViews({ slug }) {
  const views = await getViews(slug);

  return (
    <span className="font-mono text-neutral-500 mr-1 text-sm tracking-tighter">
      {`${views.toLocaleString()} views`}
    </span>
  );
}
