import Image from 'next/image';

const socialLinks = [
  {href: 'https://www.linkedin.com/in/raycoti/', icon: '/linkedin.png', label: 'LinkedIn'},
  {href: 'https://github.com/raycoti', icon: '/github.png', label: 'GitHub'}
];

const AboutMePage = () => {
  return (
    <div className='mx-auto flex max-w-7xl flex-col items-center pt-6 pb-10'>
      <h1 className='mb-6 font-heading text-4xl capitalize'>About me</h1>
      <div className='flex w-full flex-col items-center gap-8 px-8'>
        <div className='relative aspect-[3/2] w-full max-w-3xl'>
          <Image
            src='/pics/ray_pose.webp'
            alt='Self-portrait drawing of Ray'
            preload
            fill
            sizes='(min-width: 832px) 768px, 100vw'
            className='object-contain object-center'
          />
        </div>
        <div className='w-full max-w-3xl rounded-2xl border border-card-border bg-card px-6 py-4 text-left leading-loose shadow-card sm:px-12'>
          <p className='m-0 py-4 indent-10 font-body sm:px-7'>
            Howdy y&apos;all! I am a Frontend developer with 8+ years of frontend developer
            experience who specializes in Typescript and React. When I&apos;m not working I&apos;m
            either cooking up some food, dancing or working on an art project
          </p>
        </div>
      </div>
      <div className='mt-8 flex w-full justify-center gap-12'>
        {socialLinks.map(({href, icon, label}) => (
          <a
            key={href}
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`${label} (opens in a new tab)`}
            className='rounded-md'
          >
            <Image width={40} height={40} src={icon} alt='' className='h-auto w-full max-w-12' />
          </a>
        ))}
      </div>
    </div>
  );
};

export default AboutMePage;
