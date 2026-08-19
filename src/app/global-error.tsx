'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white flex flex-col items-center justify-center min-h-screen p-6 text-center font-sans">
        <h2 className="text-2xl font-bold text-rose-500 mb-2">Application Error</h2>
        <p className="text-sm text-slate-400 mb-6 max-w-md">{error?.message || 'An error occurred.'}</p>
        <button
          onClick={() => reset()}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
