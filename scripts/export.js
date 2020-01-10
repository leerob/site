const fs = require('fs');

const globby = require('globby');
const execao = require('execa-output');
const Listr = require('listr');
const prettifyXml = require('prettify-xml');

const exportDirectory = 'dist';

const generateSitemap = async () => {
    const patterns = `${exportDirectory}/**/*.html`;
    const pages = await globby(patterns);
    const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
                .map((page) => {
                    const path = page.replace(exportDirectory, '').replace('.html', '');
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

    // eslint-disable-next-line no-sync
    fs.writeFileSync(`${exportDirectory}/sitemap.xml`, prettifyXml(sitemap));
};

const tasks = new Listr([
    {
        task: () => execao('next', ['export', '-o', exportDirectory]),
        title: 'Running `next export`'
    },
    {
        task: () => generateSitemap(),
        title: 'Generating sitemap'
    }
]);

console.log(`Generating static site...`);

tasks
    .run()
    .then(() => console.log(`Export complete! 🎉`))
    .catch((error) => {
        console.error(error);
    });
