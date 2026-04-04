import Link from 'next/link';
import {ViewTransition} from 'react';

export default function Home() {
  return (
    <ViewTransition
      default='none'
      enter='slide-in'
      exit='slide-out'
      update='pulse'
      name='home-splash'
    >
      <div className='container'>
        <div className='white'>
          <h1>Ray Coti</h1>
          <h2>Blurring the line between dreams and reality</h2>
          <Link className='enter' href='/about'>
            ENTER
          </Link>
        </div>
      </div>
    </ViewTransition>
  );
}
