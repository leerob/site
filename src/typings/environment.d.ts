declare global {
  interface Window {
    goatcounter: any;
  }
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SANITY_DATASET: 'development';
      NEXT_PUBLIC_SANITY_PROJECT_ID: string;
      NODE_ENV: 'development' | 'production';
      VERCEL_ENV: 'development' | 'production';
      SANITY_API_TOKEN: string;
      SANITY_STUDIO_REVALIDATE_SECRET: string;
      SPOTIFY_CLIENT_SECRET: string;
      SPOTIFY_CLIENT_ID: string;
      SPOTIFY_REFRESH_TOKEN: string;
    }
  }
}

export {};

declare module '*.svg' {
  import type { ReactElement, SVGProps } from 'react';

  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}
