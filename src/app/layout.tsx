import type {Metadata} from 'next';
import './globals.css';
import './layout.css';

export const metadata: Metadata = {
  title: 'Ray Coti',
  description: 'Ray Coti personal website'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`h-full antialiased`}>
      <body className=''>{children}</body>
    </html>
  );
}
