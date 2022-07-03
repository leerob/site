import Link, { LinkProps } from 'next/link';
import Image, { type ImageProps } from 'next/future/image';

const CustomLink = ({props, children}: {props: React.ComponentPropsWithoutRef<"link">, children: React.ReactNode}) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props: ImageProps) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Callout({emoji, children}: {emoji: string, children: React.ReactNode}) {
  return (
    <div className="flex bg-gray-200 dark:bg-gray-800 rounded-lg p-4 my-8">
      <div className="flex items-center w-4 mr-4">{emoji}</div>
      <div className="w-full callout">{children}</div>
    </div>
  );
}

const MDXComponents = {
  Image: RoundedImage,
  a: CustomLink,
  Callout
};

export default MDXComponents;
