import { getViews } from 'lib/planetscale';

export default async function BlogViews({ slug }) {
  const views = await getViews(slug);

  return (
    <span className="mr-1 tracking-tighter">
      {`${views.toLocaleString()} views`}
    </span>
  );
}
