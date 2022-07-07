import { useMemo } from 'react';
import ExternalLink from './ExternalLink';
import Algolia from '@/assets/skill-icons/Algolia.svg';
import Aws from '@/assets/skill-icons/AWS-Dark.svg';
import Bash from '@/assets/skill-icons/Bash-Dark.svg';
import Docker from '@/assets/skill-icons/Docker.svg';
import Emotion from '@/assets/skill-icons/Emotion-Dark.svg';
import Express from '@/assets/skill-icons/ExpressJS-Dark.svg';
import Figma from '@/assets/skill-icons/Figma-Dark.svg';
import Firebase from '@/assets/skill-icons/Firebase-Dark.svg';
import Graphql from '@/assets/skill-icons/GraphQL-Dark.svg';
import Heroku from '@/assets/skill-icons/Heroku.svg';
import Jest from '@/assets/skill-icons/Jest.svg';
import Linux from '@/assets/skill-icons/Linux-Dark.svg';
import Mapbox from '@/assets/skill-icons/Mapbox.svg';
import Mongodb from '@/assets/skill-icons/MongoDB.svg';
import Mysql from '@/assets/skill-icons/MySQL-Dark.svg';
import Netlify from '@/assets/skill-icons/Netlify-Dark.svg';
import Nextjs from '@/assets/skill-icons/NextJS-Dark.svg';
import Nodejs from '@/assets/skill-icons/NodeJS-Dark.svg';
import Planetscale from '@/assets/skill-icons/Planetscale.svg';
import Postgres from '@/assets/skill-icons/PostgreSQL-Dark.svg';
import Prisma from '@/assets/skill-icons/Prisma.svg';
import React from '@/assets/skill-icons/React-Dark.svg';
import Sass from '@/assets/skill-icons/Sass.svg';
import Sanity from '@/assets/skill-icons/Sanity.svg';
import Supabase from '@/assets/skill-icons/Supabase-Dark.svg';
import Tailwind from '@/assets/skill-icons/TailwindCSS-Dark.svg';
import Typescript from '@/assets/skill-icons/TypeScript.svg';
import Vercel from '@/assets/skill-icons/Vercel-Dark.svg';
import Vite from '@/assets/skill-icons/Vite-Dark.svg';

export default function SkillsBox() {
  const stacks = useMemo(
    () => [
      {
        Icon: Algolia,
        url: 'https://golang.org/'
      },
      {
        Icon: Aws,
        url: 'https://golang.org/'
      },
      {
        Icon: Bash,
        url: 'https://kubernetes.io/'
      },
      {
        Icon: Docker,
        url: 'https://www.typescriptlang.org/'
      },
      {
        Icon: Emotion,
        url: 'https://reactjs.org/'
      },
      {
        Icon: Express,
        url: 'https://graphql.org/'
      },
      {
        Icon: Figma,
        url: 'https://aws.amazon.com/'
      },
      {
        Icon: Firebase,
        url: 'https://nextjs.org/'
      },
      {
        Icon: Graphql,
        url: 'https://elixir-lang.org/'
      },
      {
        Icon: Heroku,
        url: 'https://cloud.google.com/'
      },
      {
        Icon: Jest,
        url: 'https://www.terraform.io/'
      },
      {
        Icon: Linux,
        url: 'https://www.postgresql.org/'
      },
      {
        Icon: Mapbox,
        url: 'https://www.python.org/'
      },
      {
        Icon: Mongodb,
        url: 'https://www.python.org/'
      },
      {
        Icon: Mysql,
        url: 'https://www.python.org/'
      },
      {
        Icon: Netlify,
        url: 'https://www.python.org/'
      },
      {
        Icon: Nextjs,
        url: 'https://www.python.org/'
      },
      {
        Icon: Nodejs,
        url: 'https://www.python.org/'
      },
      {
        Icon: Planetscale,
        url: 'https://www.python.org/'
      },
      {
        Icon: Postgres,
        url: 'https://www.python.org/'
      },
      {
        Icon: Prisma,
        url: 'https://www.python.org/'
      },
      {
        Icon: React,
        url: 'https://www.python.org/'
      },
      {
        Icon: Sanity,
        url: 'https://www.python.org/'
      },
      {
        Icon: Sass,
        url: 'https://www.python.org/'
      },
      {
        Icon: Supabase,
        url: 'https://www.python.org/'
      },
      {
        Icon: Tailwind,
        url: 'https://www.python.org/'
      },
      {
        Icon: Typescript,
        url: 'https://www.python.org/'
      },
      {
        Icon: Vercel,
        url: 'https://www.python.org/'
      },
      {
        Icon: Vite,
        url: 'https://www.python.org/'
      }
    ],
    []
  );

  return (
    <div className="grid-cols-8 gap-4 justify-center">
      {stacks.map(({ Icon, url }) => (
        <ExternalLink href={url} key={url}>
          <Icon />
        </ExternalLink>
      ))}
    </div>
  );
}
