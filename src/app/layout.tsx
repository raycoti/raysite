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
        {/* First stop for keyboard users: jumps past the nav to the page content. */}
        <a
          href='#main-content'
          className='sr-only rounded-lg bg-card px-4 py-2 font-heading font-bold text-ink shadow-card focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50'
        >
          Skip to content
        </a>
        <NavBar />
        <main id='main-content' tabIndex={-1} className='focus:outline-none'>
          {children}
        </main>
      </body>
    </html>
  );
}
