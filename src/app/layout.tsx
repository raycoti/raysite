import type {Metadata} from 'next';
import NavBar from './nav';
import {nunito, roboto} from './fonts';
import './globals.css';
import './layout.css';

export const metadata: Metadata = {
  title: {
    default: 'Ray Coti',
    template: '%s | Ray Coti'
  },
  description: 'Ray Coti personal website'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${nunito.variable} ${roboto.variable} h-full antialiased`}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
