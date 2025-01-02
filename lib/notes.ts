import path from "path";
import { promises as fs } from "fs";

export interface PostMeta {
  title: string;
  keywords: string[];
  alternates: {
    canonical: string;
  };
}

export async function getNoteSlugs(dir: string) {
  const entries = await fs.readdir(dir, {
    recursive: true,
    withFileTypes: true,
  });
  return entries
    .filter((entry) => entry.isFile() && entry.name === "page.mdx")
    .map((entry) => {
      const relativePath = path.relative(
        dir,
        path.join(entry.parentPath, entry.name)
      );
      return path.dirname(relativePath);
    })
    .map((slug) => slug.replace(/\\/g, "/"));
}

async function getNoteMeta(slug: string): Promise<PostMeta | null> {
  const post = await import(`../app/n/${slug}/page.mdx`);
  try {
    return post.metadata as PostMeta;
  } catch (error) {
    console.error(`Error reading post meta for slug: ${slug}`, error);
    return null;
  }
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const slugs = await getNoteSlugs(path.join(process.cwd(), "app", "n"));
  const posts: PostMeta[] = [];

  for (const slug of slugs) {
    const post = await getNoteMeta(slug);
    if (post) {
      posts.push(post);
    }
  }

  return posts;
}
