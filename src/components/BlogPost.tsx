import Link from 'next/link';
import { Tags } from '@/components/Tags';
import { ITag } from '@/typings';

export default function BlogPost({
  slug,
  title,
  excerpt,
  tags
}: {
  slug: string;
  title: string;
  excerpt: string;
  tags?: ITag[];
}) {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full">
        <div className="w-full mb-8">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full text-lg font-semibold text-gray-900 md:text-xl dcapsize hover:text-pink-400  dark:text-gray-200 dark:hover:text-emerald-400 transition-all delay-200">
              {title}
            </h4>
          </div>
          <Tags tags={tags} />

          <p className="text-gray-700 dark:text-gray-300">{excerpt}</p>
        </div>
      </a>
    </Link>
  );
}
