import Image from 'next/future/image';
import { getWakaStats } from '@/lib/waka-api';
import Container from '@/components/Container';
import { IWakaLangStats } from '@/typings/types';
import WakaStats from '@/components/WakaStats';
import Skills from '@/components/Skills';

export default function About({ stats }: { stats: IWakaLangStats[] }) {
  return (
    <Container title="About page | Dzmitry Svirin">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About me
        </h1>
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8 mb-8 prose dark:prose-dark leading-6">
            <h2 className="mb-4">
              Hi I&apos;m Dzmitry, <em>freelance</em> full-stack developer.
              <span className="font-semibold">self-employed</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              I&apos;m a passionate Full-Stack dmeveloper living in Tbilisi,
              Georgia. During my free time I like swimming I&apos;m a Full Stack
              developer with experience in React ecosystem. Currently
              self-employed and living in Tbilisi.
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Dzmitry Svirin"
              height={176}
              width={176}
              src="/avatar.jpeg"
              sizes="30vw"
              priority
              className="rounded-full filter grayscale"
            />
          </div>
        </div>

        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>
            Technologies I use every day, frequently and from time to time:
          </h2>
          <Skills />
          <p>and mention Sanity</p>
        </div>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Get in touch:</h2>
          <p>Feel free to ask me anything!</p>
          <ul>
            <li>
              Twitter: <a href="https://twitter.com/svirins">@svirins</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/svirins">@zvirinz</a>
            </li>
            <li>
              Mail:
              <a href="mailto:svirins@gmail.com">svirins@gmail.com</a>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Job Title</h3>
          <WakaStats stats={stats} />
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const { languages } = await getWakaStats();

  return { props: { stats: languages }, revalidate: 86400 };
}
