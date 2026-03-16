export default function Spinner() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-10 h-10 border-4 border-gray-200 dark:border-gray-600 border-t-yellow-500 dark:border-t-yellow-500 rounded-full animate-spin"></div>
    </div>
  );
}
