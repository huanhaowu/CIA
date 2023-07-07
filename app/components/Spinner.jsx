export default function Spinner() {
  return (
    <div className="p-4 space-y-2 animate-pulse">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="bg-gray-400 h-6 rounded w-full"></div>
      ))}
    </div>
  );
}
