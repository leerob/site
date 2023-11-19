import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8');
  return matter(rawContent);
}

function extractTweetIds(content) {
  let tweetMatches = content.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);
  return tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]) || [];
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { data, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    let tweetIds = extractTweetIds(content);
    return {
      metadata: {
        ...data,
      },
      slug,
      tweetIds,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'content'));
}
