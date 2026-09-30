import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Nexus Hub Media',
    template: '%s | Nexus Hub Media',
  },
  description:
    'Nexus Hub Media brings together television, football, stories, and voices under one connected media platform.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-[#050A30] antialiased">
        {children}
      </body>
    </html>
  );
}
