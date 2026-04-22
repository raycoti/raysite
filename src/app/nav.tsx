'use client';
import {usePathname} from 'next/navigation';
import Link from 'next/link';

import './nav.css';

const NavBar = () => {
  const pathname = usePathname();
  console.log(pathname, 'TESTING');
  return (
    <div id='nav'>
      <Link className={pathname == '/about' ? 'active' : undefined} href='/about'>
        About
      </Link>
      <Link className={pathname == '/art' ? 'active' : undefined} href='/art'>
        Art
      </Link>
      {/* <Link href='/projects'>Projects</Link> */}
    </div>
  );
};

export default NavBar;
