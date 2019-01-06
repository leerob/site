const {parse} = require('path');
const fs = require('fs');

const globby = require('globby');
const prettifyXml = require('prettify-xml');

const removeTrailingSlash = (text) => (text.endsWith('/') ? text.slice(0, -1) : text);

(async () => {
    const dir = 'out';
    const pages = await globby(`${dir}/**/*.html`);
    const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
                .map((page) => {
                    const path = page.replace(dir, '');
                    const parsed = parse(path);
                    const loc = parsed.name === 'index' ? parsed.dir : parsed.dir + parsed.base;

                    return `
                        <url>
                            <loc>${`https://leerob.io${removeTrailingSlash(loc)}`}</loc>
                        </url>
                    `;
                })
                .join('')}
        </urlset>
    `;

    fs.writeFileSync(`${dir}/sitemap.xml`, prettifyXml(sitemap)); // eslint-disable-line no-sync
})();
