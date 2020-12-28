const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const root = process.cwd();
const files = fs.readdirSync(path.join(root, 'data', 'blog'));

const blogPosts = files.reduce((allPosts, slug) => {
  const source = fs.readFileSync(path.join(root, 'data', 'blog', slug), 'utf8');
  const { data } = matter(source);

  return [
    {
      ...data,
      slug
    },
    ...allPosts
  ];
}, []);

fs.writeFileSync(
  'public/search.toml',
  `
[input]
base_directory = "data/blog/"
frontmatter_handling = "Omit"
minimum_indexed_substring_length = 1

${blogPosts
  .map(
    (post) => `
[[input.files]]
path = "${post.slug}"
url = "/blog/${post.slug.replace('.mdx', '')}"
title = "${post.title}"
filetype = "Markdown"
    `
  )
  .join('')}

[output]
filename = "public/search-index.st"
`
);
