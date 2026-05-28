'use client';
import {usePathname} from 'next/navigation';
import Link from 'next/link';

import './nav.css';

const NavBar = () => {
  const pathname = usePathname();
  return (
    <div id='nav'>
      {paths.map((path) => (
        <Link key={path} className={pathname == path ? 'active' : undefined} href={path}>
          {path.replace('/', '').toUpperCase()}
        </Link>
      ))}
    </div>
  );
};

const paths = ['/about', '/art', '/projects'];

export default NavBar;
