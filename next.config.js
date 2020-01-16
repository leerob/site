const rehypePrism = require('@mapbox/rehype-prism');
const withMDX = require('@zeit/next-mdx')({
    extension: /\.mdx?$/u,
    options: {
        hastPlugins: [rehypePrism]
    }
});

module.exports = withMDX({
    experimental: {
        css: true,
        modern: true,
        rewrites: () => [
            {
                destination: '/api/sitemap',
                source: '/sitemap.xml'
            }
        ]
    },
    pageExtensions: ['js', 'mdx']
});
