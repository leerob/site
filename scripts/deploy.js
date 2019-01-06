const execa = require('execa');
const execao = require('execa-output');
const Listr = require('listr');

const exportDirectory = 'out';

const tasks = new Listr([
    {
        task: () => execao('yarn', ['export']),
        title: 'Exporting site'
    },
    {
        task: (ctx) =>
            execa.stdout('now', [exportDirectory]).then((result) => {
                ctx.url = result;
            }),
        title: 'Running now'
    },
    {
        task: (ctx) => execao('now', ['alias', ctx.url, 'leerob.now.sh']),
        title: 'Aliasing site'
    }
]);

console.log(`Deploying site...`);

tasks
    .run()
    .then(() => console.log('Deployment complete! 🎉'))
    .catch((error) => {
        console.error(error);
    });
