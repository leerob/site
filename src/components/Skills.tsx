import { useMemo } from 'react';

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
import ExternalLink from '@/components/ExternalLink';

export default function Skills() {
  const stacks = useMemo(
    () => [
      {
        Icon: SiAlgolia,
        url: 'https://golang.org/'
      },
      {
        Icon: SiAmazonaws,
        url: 'https://golang.org/'
      },
      {
        Icon: SiChakraui,
        url: 'https://golang.org/'
      },
      {
        Icon: SiCss3,
        url: 'https://golang.org/'
      },
      {
        Icon: SiDebian,
        url: 'https://kubernetes.io/'
      },

      {
        Icon: SiDocker,
        url: 'https://kubernetes.io/'
      },
      {
        Icon: SiExpress,
        url: 'https://www.typescriptlang.org/'
      },
      {
        Icon: SiFigma,
        url: 'https://graphql.org/'
      },
      {
        Icon: SiFirebase,
        url: 'https://aws.amazon.com/'
      },
      {
        Icon: SiFramer,
        url: 'https://aws.amazon.com/'
      },
      {
        Icon: SiGraphql,
        url: 'https://nextjs.org/'
      },
      {
        Icon: SiHeroku,
        url: 'https://elixir-lang.org/'
      },
      {
        Icon: SiJest,
        url: 'https://cloud.google.com/'
      },
      {
        Icon: SiLinux,
        featured: true,
        url: 'https://www.terraform.io/'
      },
      {
        Icon: SiMapbox,
        url: 'https://www.postgresql.org/'
      },
      {
        Icon: SiMysql,
        url: 'https://www.postgresql.org/'
      },
      {
        Icon: SiNodedotjs,
        url: 'https://www.postgresql.org/'
      },
      {
        Icon: SiNextdotjs,
        featured: true,
        url: 'https://www.postgresql.org/'
      },
      {
        Icon: SiPostgresql,
        url: 'https://www.python.org/'
      },
      {
        Icon: SiPrisma,
        url: 'https://www.python.org/'
      },
      {
        Icon: SiPnpm,
        url: 'https://www.python.org/'
      },
      {
        Icon: SiReact,
        url: 'https://www.python.org/'
      },
      {
        Icon: SiStripe,
        url: 'https://www.python.org/'
      },
      {
        Icon: SiSupabase,
        url: 'https://www.python.org/'
      },
      {
        Icon: SiTailwindcss,
        url: 'https://www.python.org/'
      },
      {
        Icon: SiTypescript,
        featured: true,
        url: 'https://www.python.org/'
      },
      {
        Icon: SiVercel,
        url: 'https://www.python.org/'
      }
    ],
    []
  );

  return (
    <div className="grid overflow-hidden grid-cols-10 grid-rows-2 gap-2 justify-center">
      {stacks.map(({ Icon, url }) => (
        <div key={url}>
          <ExternalLink href={url}>
            <Icon className="w-8 h-8" />
          </ExternalLink>
        </div>
      ))}
    </div>
  );
}
