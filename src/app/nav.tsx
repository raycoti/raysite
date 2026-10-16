'use client';
import {usePathname} from 'next/navigation';
import Link from 'next/link';

import './nav.css';

const paths = ['/about', '/art', '/projects'];

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav id='nav' aria-label='Main'>
      {paths.map((path) => {
        const isActive = pathname === path;
        return (
          <Link
            key={path}
            className={isActive ? 'active' : undefined}
            aria-current={isActive ? 'page' : undefined}
            href={path}
          >
            {path.replace('/', '')}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
