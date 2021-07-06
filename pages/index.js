import Link from 'next/link';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import ProjectCard from '../components/ProjectCard';

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60 * 60 // 1 hour
  };
}

export default function Home({ videos }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Joao Garin
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I'm a frontend developer, creator and javascript enthusiast. I work as
          a senior Frontend Developer at jobiqo. You’ve found my personal slice
          of the internet –&nbsp;
          <Link href="/about">
            <a>learn more about me.</a>
          </Link>
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Latest articles
        </h3>
        <BlogPost
          title="Finding the perfect side project stack"
          summary="In this blog post I will document a recent research for a tech stack for my side projects, or really just how I would start a real project in July 2021."
          slug="finding-the-perfetc-sidestack"
        />
        <BlogPost
          title="Ships"
          summary="Big ships are cool, they have pools and bar and tenis courts. But small ships, they are fast, exciting and easy to move around."
          slug="ships"
        />
        <BlogPost
          title="2020 in Review"
          summary="2020 was a strange year, no doubt about it. But all in all I have to say I am pretty happy looking back here at the end and seeing that despite all the challenging situations the year turned out to be not bad at all from a personal and professional point of view."
          slug="year-in-review"
        />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Latest projects
        </h3>
        <ProjectCard
          title="Haynet"
          description="Sass application for ambulatory vets, based on Nextjs, GraphQL and Drupal. Launched in late 2020, currently not completely self service."
          href="https://www.haynet.vet/"
        />
        <ProjectCard
          title="Themeforest"
          description="Between 2014 and 2017 I worked on many themes selling on themeforest. From Drupal themes to angular themes and also pure HTML themes."
          href="https://themeforest.net/user/monkey_themes"
        />
      </div>
    </Container>
  );
}
