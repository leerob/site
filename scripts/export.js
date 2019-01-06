const {cp, mv, rm} = require('shelljs');
const execao = require('execa-output');
const Listr = require('listr');

const exportDirectory = 'out';

const tasks = new Listr([
    {
        task: () => rm('-rf', exportDirectory),
        title: 'Removing export directory'
    },
    {
        task: () => execao('next', ['build']),
        title: 'Building site'
    },
    {
        task: () => execao('next', ['export']),
        title: 'Exporting site'
    },
    {
        task: () => rm('-rf', `${exportDirectory}/**/*.pxd/`),
        title: 'Removing unnecessary files'
    },
    {
        task: () => cp('-r', `${exportDirectory}/static/root/*`, `${exportDirectory}`),
        title: 'Copying static files to root'
    },
    {
        task: () => mv(`${exportDirectory}/_error/index.html`, `${exportDirectory}/404.html`),
        title: 'Moving 404 page to root'
    },
    {
        task: () => rm('-rf', `${exportDirectory}/index`),
        title: 'Removing index directory'
    },
    {
        task: () => rm('-rf', `${exportDirectory}/_error`),
        title: 'Removing _error directory'
    },
    {
        task: () => rm('-rf', `${exportDirectory}/static/root`),
        title: 'Removing static root directory'
    },
    {
        task: () => execao('node', ['./scripts/sitemap.js']),
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
