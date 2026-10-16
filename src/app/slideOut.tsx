import Link from 'next/link';
import {ViewTransition} from 'react';

// Former landing page ("Blurring the line between dreams and reality" with an ENTER button),
// kept for later. Not a route: only page.tsx files are. To use it again, render <SlideOut /> from
// a page.tsx and update the ENTER link, which still points at /about.
export default function SlideOut() {
  return (
    <ViewTransition default='no-fade' enter='slide-in' exit='slide-out'>
      <div className='home-container relative flex min-h-dvh min-w-full flex-col items-center justify-center text-center opacity-100'>
        <div className='white relative flex w-full max-w-4xl flex-col items-center justify-center py-7'>
          <h1 className='my-5 font-heading text-6xl font-bold'>Ray Coti</h1>
          <h2 className='my-5 font-heading text-3xl font-bold'>
            Blurring the line between dreams and reality
          </h2>
          <Link className='enter font-body' href='/about'>
            ENTER
          </Link>
        </div>
      </div>
    </ViewTransition>
  );
}
