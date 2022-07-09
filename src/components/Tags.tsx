export function Tags({ tags }: { tags?: string[] }) {
  return (
    <div className="flex flex-wrap w-full">
      {tags &&
        tags.map((tag) => (
          <span
            key={tag}
            className="mr-2 text-sm lowercase transition-all font-medium delay-100 text-pink-700   dark:text-green-400"
          >
            {`#${tag}`}
          </span>
        ))}
    </div>
  );
}
