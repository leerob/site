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
          Most Popular articles
        </h3>
        <BlogPost
          title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
          summary="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
          slug="style-guides-component-libraries-design-systems"
        />
        <BlogPost
          title="How Stripe Designs Beautiful Websites"
          summary="Examining the tips and tricks used to make Stripe's website design a notch above the rest."
          slug="how-stripe-designs-beautiful-websites"
        />
        <BlogPost
          title="Creating a Monorepo with Lerna & Yarn Workspaces"
          summary="In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process."
          slug="monorepo-lerna-yarn-workspaces"
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
