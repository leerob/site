const {ANALYZE} = process.env;
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const rehypePrism = require('@mapbox/rehype-prism');
const withCSS = require('@zeit/next-css');
const withMDX = require('@zeit/next-mdx')({
    extension: /\.mdx?$/u,
    options: {
        hastPlugins: [rehypePrism]
    }
});

module.exports = withCSS(
    withMDX({
        env: {
            MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
            MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID
        },
        pageExtensions: ['js', 'mdx'],
        webpack: (config, {isServer}) => {
            if (ANALYZE) {
                config.plugins.push(
                    new BundleAnalyzerPlugin({
                        analyzerMode: 'server',
                        analyzerPort: isServer ? 8888 : 8889,
                        openAnalyzer: true
                    })
                );
            }

            return config;
        }
    })
);
