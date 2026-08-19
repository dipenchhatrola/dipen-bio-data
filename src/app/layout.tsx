import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dipen Chhatrola - Bio Data',
  description: 'Matrimonial Bio Data created with Next.js and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
