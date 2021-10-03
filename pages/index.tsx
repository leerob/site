import Image from 'next/image';

import Timeline from '../components/Timeline';
import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import Subscribe from '../components/Subscribe';
import VideoCard from '../components/VideoCard';

export default function Home({ videos }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <div className="flex flex-col-reverse sm:flex-row items-center">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Lee Robinson
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Head of Developer Relations at{' '}
              <span className="font-semibold">Vercel</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Helping developers build a faster web. Teaching about web
              development, serverless, and React / Next.js.
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            {/* <span className="border border-gray-300 dark:border-gray-600 rounded-full w-[150px] h-[150px] absolute top-[-9px] left-[-9px]" />
            <span className="border border-gray-200 dark:border-gray-800 rounded-full w-[170px] h-[170px] absolute top-[-19px] left-[-19px]" /> */}
            <Image
              alt="Lee Robinson"
              height={176}
              width={176}
              src="/avatar.jpg"
              className="rounded-full filter grayscale"
            />
          </div>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured Posts
        </h3>
        <div className="flex gap-6 flex-col md:flex-row">
          <BlogPostCard
            title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
            summary="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
            slug="style-guides-component-libraries-design-systems"
            gradient="from-[#D8B4FE] to-[#818CF8]"
          />
          <BlogPostCard
            title="How Stripe Designs Beautiful Websites"
            summary="Examining the tips and tricks used to make Stripe's website design a notch above the rest."
            slug="how-stripe-designs-beautiful-websites"
            gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
          />
          <BlogPostCard
            title="Creating a Monorepo with Lerna & Yarn Workspaces"
            summary="In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process."
            slug="monorepo-lerna-yarn-workspaces"
            gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          />
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Learn React & Next.js
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Build and deploy a modern SaaS application using the most popular
          open-source software. This course is 12 hours long and is completely
          live streamed.
        </p>
        <VideoCard
          index="01"
          href="https://www.youtube.com/watch?list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=2"
          length="1:02:45"
          title="Introduction to React 2025"
        />
        <VideoCard
          index="02"
          href="https://www.youtube.com/watch?v=AGl52moyISU&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=3"
          length="54:22"
          title="Firestore, Chakra UI, Absolute Imports"
        />
        <VideoCard
          index="03"
          href="https://www.youtube.com/watch?v=3g6-v3_BNbM&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=4"
          length="1:08:30"
          title="Designing & Building the Dashboard"
        />
        <VideoCard
          index="04"
          href="https://www.youtube.com/watch?v=u8iv_yhSRI8&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=5"
          length="1:13:45"
          title="Firebase Admin with Next.js + SWR"
        />
        <span className="h-16" />
        {/* <Timeline /> */}
        <Subscribe />
      </div>
    </Container>
  );
}
