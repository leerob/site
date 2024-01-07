'use client';

import { Sandpack } from '@codesandbox/sandpack-react';
import {
  HTML,
  CSS,
  Tailwind,
  stylexIndex,
  stylexApp,
  stylexViteConfig,
  stylexTokens,
} from './sandpack-files';

export function LiveCode({ example }: { example: string }) {
  let files;

  if (example === 'html') {
    files = {
      '/styles.css': {
        code: CSS,
        active: true,
      },
      '/index.html': HTML,
    };
  } else if (example === 'tailwind') {
    files = {
      '/index.html': Tailwind,
    };
  } else if (example === 'stylex') {
    return (
      <Sandpack
        theme="auto"
        files={{
          'App.tsx': {
            code: stylexApp,
            active: true,
          },
          '/tokens.stylex.js': stylexTokens,
          '/vite.config.ts': stylexViteConfig,
          '/index.html': {
            code: stylexIndex,
            hidden: true,
          },
        }}
        template="vite-react-ts"
        customSetup={{
          dependencies: {
            '@stylexjs/stylex': '^0.3.0',
          },
          devDependencies: {
            'vite-plugin-stylex-dev': 'latest',
          },
        }}
      />
    );
  }

  return <Sandpack theme="auto" template="static" files={files} />;
}
