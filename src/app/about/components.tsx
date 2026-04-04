import Image from 'next/image';

const AboutMePage = () => {
  return (
    <div className='flex flex-col h-full items-center m-4'>
      <h1 className='text-4xl capitalize'>About me</h1>
      <div className='flex flex-col sm:flex-row min-h-96 xl:h-2/3 '>
        <div className='min-w-96 xl:min-w-80 xl:max-h-8/12 xl:max-w-3xl max-sm:h-full relative'>
          <Image
            fill
            objectFit='contain'
            objectPosition='center'
            src='/pics/ray.png'
            alt='ray self drawing'
            priority
          />
        </div>
        <div className='leading-loose '>
          <p>
            Howdy y&apos;all! I am a Frontend developer with 8+ years of frontend developer
            experience who specializes in Typescript and React. When I&apos;m not working i&apos;m
            either cooking up some food, dancing or working on an art project
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
