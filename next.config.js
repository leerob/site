const readingTime = require('reading-time');
const mdxPrism = require('mdx-prism');
const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withMdxEnhanced = require('next-mdx-enhanced');

module.exports = withPlugins(
  [
    withMdxEnhanced({
      layoutPath: 'layouts',
      defaultLayout: true,
      rehypePlugins: [mdxPrism],
      extendFrontMatter: {
        process: (mdxContent) => ({
          wordCount: mdxContent.split(/\s+/gu).length,
          readingTime: readingTime(mdxContent)
        })
      }
    })({
      pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
    }),
    withOptimizedImages
  ],
  {
    // Next.js config
    webpack: (config, { isServer }) => {
      if (isServer) {
        require('./scripts/generate-sitemap');
      }

      return config;
    }
  }
);
