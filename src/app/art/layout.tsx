import type {Metadata} from 'next';

// The art page is a client component, so its tab title is set here.
export const metadata: Metadata = {
  title: 'Art'
};

export default function ArtLayout({children}: {children: React.ReactNode}) {
  return children;
}
