import Image from 'next/image';

interface ProjectItemProps {
  name: string;
  description: string;
  imagePath: string;
}

const ProjectItem = ({name, description, imagePath}: ProjectItemProps) => {
  return (
    <div className='flex max-w-sm flex-col overflow-hidden rounded-2xl bg-amber-100 shadow-lg'>
      {imagePath && (
        <div className='relative h-56 w-full'>
          <Image
            src={imagePath}
            alt={name}
            fill
            sizes='24rem'
            className='object-cover object-center'
          />
        </div>
      )}
      <div className='p-6'>
        <h2 className='mb-2 font-heading text-2xl capitalize'>{name}</h2>
        <p className='font-body leading-relaxed'>{description}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
