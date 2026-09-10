import Image from 'next/image';
import {Roboto, Nunito} from 'next/font/google';

const nunito = Nunito({subsets: ['latin']});
const roboto = Roboto({subsets: ['latin']});

interface ProjectItemProps {
  name: string;
  description: string;
  imagePath: string;
}

const ProjectItem = ({name, description, imagePath}: ProjectItemProps) => {
  return (
    <div className='flex flex-col rounded-2xl overflow-hidden shadow-lg bg-amber-100 max-w-sm'>
      {imagePath && (
        <div className='relative w-full h-56'>
          <Image
            src={imagePath}
            alt={name}
            fill
            sizes='auto'
            style={{
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
        </div>
      )}
      <div className='p-6'>
        <h2 className={`${nunito.className} text-2xl capitalize mb-2`}>{name}</h2>
        <p className={`${roboto.className} leading-relaxed`}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
