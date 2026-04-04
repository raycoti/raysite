import Link from 'next/link';
import {Roboto, Nunito} from 'next/font/google';
import {ViewTransition} from 'react';

const nunito = Nunito({subsets: ['latin']});
const roboto = Roboto({subsets: ['latin']});

export default function Home() {
  return (
    <ViewTransition default='no-fade' enter='slide-in' exit='slide-out'>
      <div className='container text-center flex flex-col justify-center items-center relative opacity-100 min-w-full min-h-dvh'>
        <div className='white w-full flex flex-col items-center relative justify-center py-7 max-w-4xl'>
          <h1 className={`${nunito.className} font-bold text-6xl my-5`}>Ray Coti</h1>
          <h2 className={`${nunito.className} font-bold text-3xl my-5`}>
            Blurring the line between dreams and reality
          </h2>
          <Link className={`enter ${roboto.className}`} href='/about'>
            ENTER
          </Link>
        </div>
      </div>
    </ViewTransition>
  );
}
