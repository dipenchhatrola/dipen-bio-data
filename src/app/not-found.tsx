import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-2xl font-bold text-amber-500 mb-2">404 - Page Not Found</h2>
      <p className="text-sm text-slate-400 mb-6">Could not find requested resource</p>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold text-sm transition"
      >
        Return Home
      </Link>
    </div>
  );
}
