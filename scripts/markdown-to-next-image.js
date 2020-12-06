const { promisify } = require('util');
const { resolve } = require('path');
const fs = require('fs');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const unified = require('unified');
const markdown = require('remark-parse');
const md = require('remark-stringify');
const frontmatter = require('remark-frontmatter');
const prettier = require('prettier');

const imgToJsx = require('./img-to-jsx');

async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(
    subdirs.map(async (subdir) => {
      const res = resolve(dir, subdir);
      return (await stat(res)).isDirectory() ? getFiles(res) : res;
    })
  );
  return files.reduce((a, f) => a.concat(f), []);
}

async function getImageSizes(dir) {
  const files = await getFiles(dir);
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');

  console.log(files);

  files.map((filePath) => {
    const contents = unified()
      .use(markdown)
      .use(imgToJsx)
      .use(md)
      .use(frontmatter, ['yaml'])
      .processSync(fs.readFileSync(filePath))
      .toString();

    const outputDir = `${process.cwd()}/${dir}`;

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }

    const slug = filePath.split(dir)[1];

    const formatted = prettier.format(contents, {
      ...prettierConfig,
      parser: 'markdown'
    });

    fs.writeFileSync(`${outputDir}/${slug}`, formatted);
  });
}

getImageSizes('data/blog')
  .then(() => console.log('Done!'))
  .catch((e) => console.error(e));
