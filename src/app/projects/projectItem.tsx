import Image from 'next/image';
import Link from 'next/link';
import type {Project, ProjectLink} from './projectInfo';

interface ProjectItemProps {
  name: string;
  description: string;
  imagePath: string;
  link?: Project['link'];
  tech?: string[];
  /** When set, the card is the tab panel for the project tab with this id. */
  panelId?: string;
  tabId?: string;
}

// Outlined button that fills with the accent color on hover.
const linkClassName =
  'inline-flex shrink-0 items-center gap-2 rounded-lg border-2 border-accent px-3 py-1.5 text-sm font-heading font-bold text-accent transition-colors hover:bg-accent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

// A single URL becomes one "See project" link; a list is used as-is.
const toLinks = (link: Project['link']): ProjectLink[] => {
  if (!link) return [];
  return typeof link === 'string' ? [{name: 'See project', link}] : link;
};

const ProjectLinkButton = ({name, link}: ProjectLink) =>
  /^https?:\/\//.test(link) ? (
    <a href={link} target='_blank' rel='noopener noreferrer' className={linkClassName}>
      {name} <span aria-hidden='true'>&rarr;</span>
      <span className='sr-only'> (opens in a new tab)</span>
    </a>
  ) : (
    <Link href={link} className={linkClassName}>
      {name} <span aria-hidden='true'>&rarr;</span>
    </Link>
  );

const ProjectItem = ({
  name,
  description,
  imagePath,
  link,
  tech = [],
  panelId,
  tabId
}: ProjectItemProps) => {
  const links = toLinks(link);

  return (
    <div
      id={panelId}
      role={panelId ? 'tabpanel' : undefined}
      aria-labelledby={tabId}
      className='max-w-4xl flex-1 rounded-2xl border border-card-border bg-card p-6 shadow-card'
    >
      {/* Title with the links beside it; the links wrap under the title on phones. */}
      <div className='mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
        <h2 className='font-heading text-2xl capitalize'>{name}</h2>
        {links.length > 0 && (
          <div className='flex flex-wrap gap-2'>
            {links.map((projectLink) => (
              <ProjectLinkButton key={projectLink.link} {...projectLink} />
            ))}
          </div>
        )}
      </div>
      {tech.length > 0 && (
        <ul aria-label='Built with' className='mb-4 flex flex-wrap gap-2'>
          {tech.map((item) => (
            <li
              key={item}
              className='rounded-full border border-card-border bg-card-tint px-3 py-1 font-body text-sm'
            >
              {item}
            </li>
          ))}
        </ul>
      )}
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
