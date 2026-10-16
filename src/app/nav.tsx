'use client';
import {usePathname} from 'next/navigation';
import Link from 'next/link';

import './nav.css';

const links = [
  {href: '/', label: 'about'},
  {href: '/projects', label: 'projects'},
  {href: '/art', label: 'art'}
];

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav id='nav' aria-label='Main'>
      {links.map(({href, label}) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            className={isActive ? 'active' : undefined}
            aria-current={isActive ? 'page' : undefined}
            href={href}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
