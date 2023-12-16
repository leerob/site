import Link from 'next/link';
import { Tags } from '@/app/ui/Tags';
import { IPost } from '@/app/lib/sanity';

export function PostPreview({ slug, title, excerpt, tags }: Partial<IPost>) {
  return (
    <div className=" w-full py-4">
      <div className="w-full">
        <Tags tags={tags} />
        <Link
          href={`/blog/${slug}`}
          className=" w-full  duration-150 ease-in-out py-4"
        >
          {' '}
          <h3 className="text-xl md:text-2xl font-medium text-left  hover:text-active text-gray-100">
            {title}
          </h3>
        </Link>

        <p className=" text-gray-400 md:text-lg">{excerpt}</p>
      </div>
    </div>
  );
}
