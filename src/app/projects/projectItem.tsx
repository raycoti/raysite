import Image from 'next/image';

interface ProjectItemProps {
  name: string;
  description: string;
  imagePath: string;
}

const ProjectItem = ({name, description, imagePath}: ProjectItemProps) => {
  return (
    <div className='max-w-4xl flex-1 rounded-2xl border border-card-border bg-card p-6 shadow-card'>
      <h2 className='mb-4 font-heading text-2xl capitalize'>{name}</h2>
      <div className='flex flex-col gap-6'>
        {imagePath && (
          <div className='relative aspect-video w-full overflow-hidden rounded-xl'>
            <Image
              src={imagePath}
              alt={name}
              fill
              sizes='(min-width: 1024px) 56rem, 100vw'
              className='object-cover object-center'
            />
          </div>
        )}
        <p className='font-body leading-relaxed'>{description}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
