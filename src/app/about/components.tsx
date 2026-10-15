import Image from 'next/image';

const socialLinks = [
  {href: 'https://www.linkedin.com/in/raycoti/', icon: '/linkedin.png', label: 'LinkedIn'},
  {href: 'https://github.com/raycoti', icon: '/github.png', label: 'GitHub'}
];

const AboutMePage = () => {
  return (
    <div className='mx-auto flex h-dvh max-w-7xl flex-col items-center justify-center'>
      <h1 className='mb-10 font-heading text-4xl capitalize'>About me</h1>
      <div className='flex min-h-96 flex-col px-8 sm:flex-row xl:h-3/4'>
        <div className='relative min-h-7/8 min-w-full max-sm:h-full xl:mr-8'>
          <Image
            src='/pics/ray_pose.png'
            alt='Self-portrait drawing of Ray'
            preload
            fill
            sizes='(min-width: 640px) 50vw, 100vw'
            className='object-contain object-center'
          />
        </div>
        <div className='rounded-2xl bg-amber-100 px-12 py-4 text-left leading-loose xl:max-h-7/12 xl:max-w-xl xl:min-w-80'>
          <p className='m-0 px-7 py-4 indent-10 font-body'>
            Howdy y&apos;all! I am a Frontend developer with 8+ years of frontend developer
            experience who specializes in Typescript and React. When I&apos;m not working I&apos;m
            either cooking up some food, dancing or working on an art project
          </p>
        </div>
      </div>
      <div className='mt-10 flex w-full justify-center gap-12'>
        {socialLinks.map(({href, icon, label}) => (
          <a key={href} href={href} target='_blank' rel='noopener noreferrer'>
            <Image
              width={40}
              height={40}
              src={icon}
              alt={label}
              className='h-auto w-full max-w-12'
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default AboutMePage;
