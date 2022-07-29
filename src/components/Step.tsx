export default function Step({
  number,
  title
}: {
  number: number;
  title: string;
}) {
  return (
    <div className="step flex items-center py-4">
      <div className="flex items-center justify-center border border-gray-200 pt-1 font-semibold dark:border-gray-800 rounded-full h-8 w-8 text-signal dark:text-signal-dark">
        {number}
      </div>
      <h3 className="ml-3 tracking-tight font-semibold">{title}</h3>
    </div>
  );
}
