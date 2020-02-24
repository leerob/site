const prism = require('@mapbox/rehype-prism');
const slug = require('rehype-slug');
const link = require('rehype-autolink-headings');
const withMDX = require('@next/mdx')({
    extension: /\.(mdx)?$/u,
    options: {
        rehypePlugins: [prism, slug, [link, {behavior: 'wrap'}]]
    }
});

module.exports = withMDX({
    experimental: {
        modern: true
    },
    pageExtensions: ['js', 'mdx'],
    webpack: (config, {isServer}) => {
        if (isServer) {
            require('./scripts/generate-sitemap');
        }

        return config;
    }
});
