/* eslint-disable no-sync */
const fs = require('fs');

const globby = require('globby');
const prettier = require('prettier');

(async () => {
    const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
    const pages = await globby(['pages/**/*{.js,.mdx}', '!pages/_*.js', '!pages/api']);
    const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
                .map((page) => {
                    const path = page
                        .replace('pages', '')
                        .replace('.js', '')
                        .replace('.mdx', '');
                    const route = path === '/index' ? '' : path;
                    const date = fs.statSync(page).mtime;
                    const lastModified = date.toISOString().slice(0, 10);

                    return `
                        <url>
                            <loc>${`https://leerob.io${route}`}</loc>
                            <lastmod>${lastModified}</lastmod>
                            <changefreq>daily</changefreq>
                        </url>
                    `;
                })
                .join('')}
        </urlset>
    `;

    const formatted = prettier.format(sitemap, {
        ...prettierConfig,
        parser: 'html'
    });

    fs.writeFileSync('public/sitemap.xml', formatted);
})();
/* eslint-enable no-sync */
