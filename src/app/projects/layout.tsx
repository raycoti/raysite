import type {Metadata} from 'next';

// The projects page is a client component, so its tab title is set here.
export const metadata: Metadata = {
  title: 'Projects'
};

export default function ProjectsLayout({children}: {children: React.ReactNode}) {
  return children;
}
