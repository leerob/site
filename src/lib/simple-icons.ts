import {
  SiAlgolia,
  SiAmazonaws,
  SiChakraui,
  SiCss3,
  SiDebian,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGraphql,
  SiHeroku,
  SiJest,
  SiLinux,
  SiMapbox,
  SiMysql,
  SiNodedotjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiPnpm,
  SiReact,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel
} from 'react-icons/si';
import { IStack } from '@/typings';
import { useMemo } from 'react';
export const STACKS: IStack[] = [
  {
    Icon: SiAlgolia,
    url: 'https://golang.org/',
    title: 'Algolia',
    color: '#00BFB3'
  },
  {
    Icon: SiAmazonaws,
    url: 'https://golang.org/',
    title: 'Amazon AWS',
    color: '#FFC107'
  },
  {
    Icon: SiChakraui,
    url: 'https://golang.org/',
    title: 'Chakra UI',
    color: '#00BFB3'
  },
  {
    Icon: SiCss3,
    url: 'https://golang.org/',
    title: 'CSS3',
    color: '#FFC107'
  },
  {
    Icon: SiDebian,
    url: 'https://kubernetes.io/',
    title: 'Debian',
    color: '#FFC107'
  },

  {
    Icon: SiDocker,
    url: 'https://kubernetes.io/',
    title: 'Docker',
    color: '#FFC107'
  },
  {
    Icon: SiExpress,
    url: 'https://www.typescriptlang.org/',
    title: 'Express',
    color: '#FFC107'
  },
  {
    Icon: SiFigma,
    url: 'https://graphql.org/',
    title: 'Figma',
    color: '#FFC107'
  },
  {
    Icon: SiFirebase,
    url: 'https://aws.amazon.com/',
    title: 'Firebase',
    color: '#FFC107'
  },
  {
    Icon: SiFramer,
    url: 'https://aws.amazon.com/',
    title: 'Framer',
    color: '#FFC107'
  },
  {
    Icon: SiGraphql,
    url: 'https://nextjs.org/',
    title: 'GraphQL',
    color: '#FFC107'
  },
  {
    Icon: SiHeroku,
    url: 'https://elixir-lang.org/',
    title: 'Heroku',
    color: '#FFC107'
  },
  {
    Icon: SiJest,
    url: 'https://cloud.google.com/',
    title: 'Jest',
    color: '#FFC107'
  },
  {
    Icon: SiLinux,
    featured: true,
    url: 'https://www.terraform.io/',
    title: 'Linux',
    color: '#FFC107'
  },
  {
    Icon: SiMapbox,
    url: 'https://www.postgresql.org/',
    title: 'Mapbox',
    color: '#FFC107'
  },
  {
    Icon: SiMysql,
    url: 'https://www.postgresql.org/',
    title: 'MySQL',
    color: '#FFC107'
  },
  {
    Icon: SiNodedotjs,
    url: 'https://www.postgresql.org/',
    title: 'Node.js',
    color: '#FFC107'
  },
  {
    Icon: SiNextdotjs,
    featured: true,
    url: 'https://www.postgresql.org/',
    title: 'Next.js',
    color: '#FFC107'
  },
  {
    Icon: SiPostgresql,
    url: 'https://www.python.org/',
    title: 'PostgreSQL',
    color: '#FFC107'
  },
  {
    Icon: SiPrisma,
    url: 'https://www.python.org/',
    title: 'Prisma',
    color: '#FFC107'
  },
  {
    Icon: SiPnpm,
    url: 'https://www.python.org/',
    title: 'PnPM',
    color: '#FFC107'
  },
  {
    Icon: SiReact,
    url: 'https://www.python.org/',
    title: 'React',
    color: '#FFC107'
  },
  {
    Icon: SiStripe,
    url: 'https://www.python.org/',
    title: 'Stripe',
    color: '#FFC107'
  },
  {
    Icon: SiSupabase,
    url: 'https://www.python.org/',
    title: 'Supabase',
    color: '#FFC107'
  },
  {
    Icon: SiTailwindcss,
    url: 'https://www.python.org/',
    title: 'Tailwind CSS',
    color: '#FFC107'
  },
  {
    Icon: SiTypescript,
    featured: true,
    url: 'https://www.python.org/',
    title: 'Typescript',
    color: '#FFC107'
  },
  {
    Icon: SiVercel,
    url: 'https://www.python.org/',
    title: 'Vercel',
    color: '#FFC107'
  }
];

export function getIcon(name: string) {
  const Icon = STACKS.find((stack) => stack.title === name)?.Icon;
  console.log(Icon);
  return Icon;
}
