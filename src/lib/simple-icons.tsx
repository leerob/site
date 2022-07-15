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

export const STACKS = [
  {
    Icon: <SiAlgolia className="w-8 h-8 fill-current" />,
    url: 'https://algolia.com/',
    iconTitle: 'Algolia',
    color: '#00BFB3'
  },
  {
    Icon: <SiAmazonaws className="w-8 h-8 fill-current" />,
    url: 'https://golang.org/',
    iconTitle: 'Amazon AWS',
    color: '#FFC107'
  },
  {
    Icon: <SiChakraui className="w-8 h-8 fill-current" />,
    url: 'https://golang.org/',
    iconTitle: 'Chakra UI',
    color: '#00BFB3'
  },
  {
    Icon: <SiCss3 className="w-8 h-8 fill-current" />,
    url: 'https://golang.org/',
    iconTitle: 'CSS3',
    color: '#FFC107'
  },
  {
    Icon: <SiDebian className="w-8 h-8 fill-current" />,
    url: 'https://kubernetes.io/',
    iconTitle: 'Debian',
    color: '#FFC107'
  },

  {
    Icon: <SiDocker className="w-8 h-8 fill-current" />,
    url: 'https://kubernetes.io/',
    iconTitle: 'Docker',
    color: '#FFC107'
  },
  {
    Icon: <SiExpress className="w-8 h-8 fill-current" />,
    url: 'https://www.typescriptlang.org/',
    iconTitle: 'Express',
    color: '#FFC107'
  },
  {
    Icon: <SiFigma className="w-8 h-8 fill-current" />,
    url: 'https://graphql.org/',
    iconTitle: 'Figma',
    color: '#FFC107'
  },
  {
    Icon: <SiFirebase className="w-8 h-8 fill-current" />,
    url: 'https://aws.amazon.com/',
    iconTitle: 'Firebase',
    color: '#FFC107'
  },
  {
    Icon: <SiFramer className="w-8 h-8 fill-current" />,
    url: 'https://aws.amazon.com/',
    iconTitle: 'Framer',
    color: '#FFC107'
  },
  {
    Icon: <SiGraphql className="w-8 h-8 fill-current" />,
    url: 'https://nextjs.org/',
    iconTitle: 'GraphQL',
    color: '#FFC107'
  },
  {
    Icon: <SiHeroku className="w-8 h-8 fill-current" />,
    url: 'https://elixir-lang.org/',
    iconTitle: 'Heroku',
    color: '#FFC107'
  },
  {
    Icon: <SiJest className="w-8 h-8 fill-current" />,
    url: 'https://cloud.google.com/',
    iconTitle: 'Jest',
    color: '#FFC107'
  },
  {
    Icon: <SiLinux className="w-8 h-8 fill-current" />,
    featured: true,
    url: 'https://www.terraform.io/',
    iconTitle: 'Linux',
    color: '#FFC107'
  },
  {
    Icon: <SiMapbox className="w-8 h-8 fill-current" />,
    url: 'https://www.postgresql.org/',
    iconTitle: 'Mapbox',
    color: '#FFC107'
  },
  {
    Icon: <SiMysql className="w-8 h-8 fill-current" />,
    url: 'https://www.postgresql.org/',
    iconTitle: 'MySQL',
    color: '#FFC107'
  },
  {
    Icon: <SiNodedotjs className="w-8 h-8 fill-current" />,
    url: 'https://www.postgresql.org/',
    iconTitle: 'Node.js',
    color: '#FFC107'
  },
  {
    Icon: <SiNextdotjs className="w-8 h-8 fill-current" />,
    featured: true,
    url: 'https://www.postgresql.org/',
    iconTitle: 'Next.js',
    color: '#FFC107'
  },
  {
    Icon: <SiPostgresql className="w-8 h-8 fill-current" />,
    url: 'https://www.python.org/',
    iconTitle: 'PostgreSQL',
    color: '#FFC107'
  },
  {
    Icon: <SiPrisma className="w-8 h-8 fill-current" />,
    url: 'https://www.python.org/',
    iconTitle: 'Prisma',
    color: '#FFC107'
  },
  {
    Icon: <SiPnpm className="w-8 h-8 fill-current" />,
    url: 'https://www.python.org/',
    iconTitle: 'PnPM',
    color: '#FFC107'
  },
  {
    Icon: <SiReact className="w-8 h-8 fill-current" />,
    url: 'https://www.python.org/',
    iconTitle: 'React',
    color: '#FFC107'
  },
  {
    Icon: <SiStripe className="w-8 h-8 fill-current" />,
    url: 'https://www.python.org/',
    iconTitle: 'Stripe',
    color: '#FFC107'
  },
  {
    Icon: <SiSupabase className="w-8 h-8 fill-current" />,
    url: 'https://www.python.org/',
    iconTitle: 'Supabase',
    color: '#FFC107'
  },
  {
    Icon: <SiTailwindcss className="w-8 h-8 fill-current" />,
    url: 'https://www.python.org/',
    iconTitle: 'Tailwind CSS',
    color: '#FFC107'
  },
  {
    Icon: <SiTypescript className="w-8 h-8 fill-current" />,
    featured: true,
    url: 'https://www.python.org/',
    iconTitle: 'Typescript',
    color: '#FFC107'
  },
  {
    Icon: <SiVercel className="w-8 h-8 fill-current" />,
    url: 'https://www.python.org/',
    iconTitle: 'Vercel',
    color: '#FFC107'
  }
];

export function getStackIcon(iconTitle: string) {
  return (
    STACKS.find((stack) => stack.iconTitle === iconTitle)?.Icon ?? 'SiLinux'
  );
}
