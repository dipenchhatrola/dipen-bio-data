'use client';

import dynamic from 'next/dynamic';

const AppRouterWrapper = dynamic(
  () => import('../components/AppRouterWrapper').then((mod) => mod.AppRouterWrapper),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center font-sans">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-sm font-semibold text-slate-400">Loading Executive Bio Data...</span>
        </div>
      </div>
    ),
  }
);

export default function Home() {
  return <AppRouterWrapper />;
}
