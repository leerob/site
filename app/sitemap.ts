import { getNoteSlugs } from "@/lib/notes";
import path from "path";

export default async function sitemap() {
  const notesDirectory = path.join(process.cwd(), "app", "n");
  const slugs = await getNoteSlugs(notesDirectory);

  const notes = slugs.map((slug) => ({
    url: `https://leerob.com/n/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = ["", "/work"].map((route) => ({
    url: `https://leerob.com${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...notes];
}
