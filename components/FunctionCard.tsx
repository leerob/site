import Link from 'next/link';
import Image from 'next/image';

export default function FunctionCard({
  title,
  description,
  slug,
  logo,
  ...rest
}) {
  return (
    <Link href={`/snippets/${slug}`}>
      <a
        className="border border-grey-200 dark:border-gray-900 rounded p-4 w-full"
        {...rest}
      >
        <Image
          alt={title}
          height={32}
          width={32}
          src={`/logos/${logo}`}
          className="rounded-full"
        />
        <h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="mt-1 text-gray-700 dark:text-gray-400">{description}</p>
      </a>
    </Link>
  );
}
