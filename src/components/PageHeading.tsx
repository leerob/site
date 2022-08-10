interface IPageHeading {
  title: string;
  subtitle?: string;
}

export default function PageHeading({ title, subtitle }: IPageHeading) {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full">
      <div className="flex flex-col items-start">
        <h1 className="text-3xl md:text-5xl capsize tracking-tight mb-4 font-bold bg-gradient-to-r from-orange-300 to-red-800 bg-clip-text  text-transparent dark:bg-gradient-to-l dark:from-emerald-500 dark:to-lime-600">
          {title}
        </h1>
        {subtitle && (
          <h2 className="text-xl md:text-2xl tracking-tight text-gray-900 dark:text-gray-100 font-medium">
            {subtitle}
          </h2>
        )}
      </div>
    </div>
  );
}
