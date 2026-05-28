import Image from 'next/image';
import {Roboto, Nunito} from 'next/font/google';

const nunito = Nunito({subsets: ['latin']});
const roboto = Roboto({subsets: ['latin']});

const AboutMePage = () => {
  return (
    <div className='flex flex-col h-dvh items-center mx-auto justify-center max-w-7xl'>
      <h1 className={`${nunito.className}  text-4xl capitalize mb-10`}>About me</h1>
      <div className='flex flex-col sm:flex-row min-h-96 xl:h-3/4 px-8'>
        <div className='min-w-full max-sm:h-full relative min-h-7/8 xl:mr-8'>
          <Image
            fill
            objectFit='contain'
            objectPosition='center'
            src='/pics/ray_pose.png'
            alt='ray self drawing'
            priority
          />
        </div>
        <div className='leading-loose rounded-2xl text-left py-4 px12  bg-amber-100 xl:min-w-80 xl:max-w-xl xl:max-h-7/12'>
          <p className={`${roboto.className} m-0 indent-10 py-4 px-7`}>
            Howdy y&apos;all! I am a Frontend developer with 8+ years of frontend developer
            experience who specializes in Typescript and React. When I&apos;m not working i&apos;m
            either cooking up some food, dancing or working on an art project
          </p>
        </div>
      </div>
      <div className='w-full flex justify-center gap-12 mt-10'>
        <a target='_blank' href='https://www.linkedin.com/in/raycoti/'>
          <Image
            width={40}
            height={40}
            style={{maxWidth: '3rem', width: '100%'}}
            src='/linkedin.png'
            alt='linkedin'
          />
        </a>
        <a target='_blank' href='https://github.com/raycoti'>
          <Image
            width={40}
            height={40}
            style={{maxWidth: '3rem', width: '100%'}}
            src='/github.png'
            alt='github'
          />
        </a>
      </div>
    </div>
  );
};

export default AboutMePage;
