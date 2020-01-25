const BundleAnalyzerPlugin = require('@bundle-analyzer/webpack-plugin');
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
        modern: true
    },
    pageExtensions: ['js', 'mdx'],
    webpack: (config) => {
        config.plugins.push(
            new BundleAnalyzerPlugin({
                token: process.env.BUNDLE_ANALYZER_TOKEN
            })
        );

        return config;
    }
});
