export default function Step({ number, title }) {
  return (
    <div className="step flex items-center py-4">
      <div className="flex items-center justify-center border border-gray-200 pt-1 font-bold dark:border-gray-800 rounded-full h-8 w-8 text-blue-500">
        {number}
      </div>
      <h3 className="ml-3 tracking-tight font-bold">{title}</h3>
    </div>
  );
}
