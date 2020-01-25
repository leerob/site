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
                token: 'fdebd748e86e965d28ac7fdd6203a5a50076e13a'
            })
        );

        return config;
    }
});
