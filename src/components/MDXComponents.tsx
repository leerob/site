import Image from '@/components/Image';
const Callout = ({
  emoji,
  children
}: {
  emoji: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex bg-gray-200 dark:bg-gray-800 rounded-lg p-4 my-8">
      <div className="flex items-center w-4 mr-4">{emoji}</div>
      <div className="w-full callout">{children}</div>
    </div>
  );
};

const MDXComponents = {
  img: Image,
  Callout
};

export default MDXComponents;
