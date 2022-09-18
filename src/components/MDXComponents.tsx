import Image from '@/components/Image';
import { Spotify, YouTube } from 'mdx-embed';

const Underlined = ({ title, href }: { title: string; href: string }) => {
  return (
    <a
      className=" text-gray-800 dark:text-gray-300  font-medium link-underline link-underline-gradient"
      href={href}
      title={title}
    >
      {title}
    </a>
  );
};

const MDXComponents = {
  img: Image,
  Underlined,
  Spotify,
  YouTube
};

export default MDXComponents;
