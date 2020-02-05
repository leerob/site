const rehypePrism = require('@mapbox/rehype-prism');
const withMDX = require('@next/mdx')({
    extension: /\.(mdx)?$/u,
    options: {
        rehypePlugins: [rehypePrism]
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
