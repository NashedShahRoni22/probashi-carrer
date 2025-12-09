export default function JobCardSkeleton() {
  return (
    <div className="border p-4 rounded-xl shadow-sm bg-white animate-pulse">
      <div className="h-4 w-1/3 bg-gray-300 rounded mb-3"></div>
      <div className="h-3 w-1/2 bg-gray-300 rounded mb-3"></div>
      <div className="h-3 w-1/4 bg-gray-300 rounded mb-3"></div>
      <div className="h-8 w-full bg-gray-300 rounded mt-4"></div>
    </div>
  );
}
