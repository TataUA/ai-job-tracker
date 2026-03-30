import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Job Tracker',
  description: 'Track job applications, statuses, and notes in one place.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
