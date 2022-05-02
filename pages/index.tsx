import Image from 'next/image';
import Link from 'next/link';
import Container from '../components/Container';
import IndexPostCard from '../components/IndexPostCard';

export default function Home({ videos }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Satvik Shukla
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Developer at{' '}
              <span className="font-semibold">Warner Bros. Discovery</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Creating seamless purchase flows for HBO Max. Sharing experiences
              about web development and beyond.
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Satvik Shukla"
              height={176}
              width={176}
              src="/avatar.png"
              className="rounded-full filter grayscale"
            />
          </div>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured Content
        </h3>
        <div className="flex gap-6 flex-col md:flex-row">
          <IndexPostCard
            title="What's the right opportunity out of college?"
            gradient="from-[#feac5e] via-[#c779d0] to-[#4bc0c8]"
            link="/blog/college-grad-decision"
          />
          <IndexPostCard
            title="Infrastucture as Code using AWS CDK"
            gradient="from-[#004ff9] to-[#fff94c]"
            link="/blog/aws-cdk-fun"
          />
          <IndexPostCard
            title="API development and testing at HBO Max"
            gradient="from-[#dc2424] to-[#4a569d]"
            link="https://youtu.be/K0atgOS_Yj0"
          />
        </div>
        <Link href="/blog">
          <a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            Read all posts
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>
      </div>
    </Container>
  );
}
