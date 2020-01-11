const globby = require('globby');

export default async (_, res) => {
    res.setHeader('Content-Type', 'text/xml');

    const pages = await globby(['pages/**/*{.js,.mdx}', '!pages/_*.js', '!pages/api']);
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
                .map((page) => {
                    const path = page
                        .replace('pages', '')
                        .replace('.js', '')
                        .replace('.mdx', '');
                    const route = path === '/index' ? '/' : path;

                    return `
                        <url>
                            <loc>${`https://leerob.io${route}`}</loc>
                        </url>
                    `;
                })
                .join('')}
        </urlset>
    `;

    res.write(sitemap);
    res.end();
};
