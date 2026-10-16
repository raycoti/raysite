import Image from 'next/image';
import ResumeLink from '../resumeLink';

const socialLinks = [
  {href: 'https://www.linkedin.com/in/raycoti/', icon: '/linkedin.png', label: 'LinkedIn'},
  {href: 'https://github.com/raycoti', icon: '/github.png', label: 'GitHub'}
];

const AboutMePage = () => {
  return (
    <div className='mx-auto flex max-w-7xl flex-col items-center pt-6 pb-10'>
      <h1 className='mb-6 font-heading text-4xl capitalize'>About me</h1>
      <div className='flex w-full flex-col items-center gap-8 px-8'>
        <div className='relative aspect-3/2 w-full max-w-3xl'>
          <Image
            src='/pics/ray-portrait.jpeg'
            alt='Self-portrait drawing of Ray'
            preload
            fill
            sizes='(min-width: 832px) 768px, 100vw'
            className='object-contain object-center'
          />
        </div>
        <div className='w-full max-w-3xl rounded-2xl border border-card-border bg-card px-6 py-4 text-left leading-loose shadow-card sm:px-12'>
          <p className='m-0 py-4 indent-10 font-body sm:px-7'>
            Hello! I am a Software Engineer with 8+ years of Frontend development experience. I
            specialize in Typescript and React. When I&apos;m not working I&apos;m either cooking up
            some food, dancing or working on an art project. This website was built using Next.js
          </p>
        </div>
      </div>
      <div className='mt-8 flex w-full flex-wrap items-center justify-center gap-x-12 gap-y-6'>
        <ResumeLink />
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
