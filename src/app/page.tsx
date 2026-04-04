import Link from 'next/link';
import {Roboto, Nunito} from 'next/font/google';
import {ViewTransition} from 'react';

const nunito = Nunito({variable: '--font-nunito', subsets: ['latin']});
const roboto = Roboto({variable: '--roboto', subsets: ['latin']});

export default function Home() {
  return (
    <ViewTransition
      default='none'
      enter='slide-in'
      exit='slide-out'
      update='pulse'
      name='home-splash'
    >
      <div className='container text-center flex flex-col justify-center items-center relative opacity-100 min-w-full min-h-dvh'>
        <div className='white w-full flex flex-col items-center relative justify-center py-6 max-w-4xl'>
          <h1 className={nunito.className}>Ray Coti</h1>
          <h2 className={nunito.className}>Blurring the line between dreams and reality</h2>
          <Link className={`enter ${roboto.variable}`} href='/about'>
            ENTER
          </Link>
        </div>
      </div>
    </ViewTransition>
  );
}
