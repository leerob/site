const fs = require('fs');
const {parse} = require('path');

const cpy = require('cpy');
const del = require('del');
const globby = require('globby');
const execao = require('execa-output');
const Listr = require('listr');
const prettifyXml = require('prettify-xml');

const exportDirectory = 'dist';
const removeTrailingSlash = (text) => (text.endsWith('/') ? text.slice(0, -1) : text);
const generateSitemap = async () => {
    const patterns = `${exportDirectory}/**/*.html`;
    const pages = await globby(patterns);
    const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
                .map((page) => {
                    const path = page.replace(exportDirectory, '');
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

    // eslint-disable-next-line no-sync
    fs.writeFileSync(`${exportDirectory}/sitemap.xml`, prettifyXml(sitemap));
};

const tasks = new Listr([
    {
        task: () => execao('next', ['export', '-o', exportDirectory]),
        title: 'Running `next export`'
    },
    {
        task: () => cpy([`${exportDirectory}/static/root/*`], exportDirectory),
        title: 'Copying static files to root'
    },
    {
        task: () => del([`${exportDirectory}/**/*.pxd/`, `${exportDirectory}/index`, `${exportDirectory}/static/root`]),
        title: 'Removing unnecessary files and folders'
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
