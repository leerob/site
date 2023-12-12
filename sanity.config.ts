/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { markdownSchema } from 'sanity-plugin-markdown';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';
import { visionTool } from '@sanity/vision';

import { schema } from './sanity/schema';

export default defineConfig({
  basePath: '/studio',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,
  schema,
  plugins: [
    deskTool(),
    visionTool({
      defaultApiVersion:
        process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-12-12'
    }),
    markdownSchema(),
    vercelDeployTool()
  ]
});
