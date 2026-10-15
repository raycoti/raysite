export interface Project {
  name: string;
  description: string;
  image: string;
}

export type ProjectCategory = 'personal' | 'professional';

const personalProjectInfo = {
  interactiveNarrative: {
    name: 'Interactive Narrative',
    description: `This project is a "walking simulator" that takes players on my journey as a first-generation student travelling away for college. The story is told through interactable snippets and visual metaphors. The project was originally built with multiple users in mind (via networking and matchmaking) and I used that to disrupt the control of my own narrative. I did this by having the snippets cycle one sentence at a time, rather than be shown in full. This meant that the last sentence a user reads, would become the first sentence the next user reads.
Thus, as more people interact with the environment the more mixed up the story would become. The project was built using Unity 3D,
Maya3D, and Blender.`,
    image: '/projects/interactive-narrative.webp'
  }
} satisfies Record<string, Project>;

// Stubbed with duplicated data - swap in real professional projects.
const professionalProjectInfo = {} satisfies Record<string, Project>;

export const professionalOverview = `I'm a Frontend developer with 8+ years of experience specializing in Typescript and React. Below is a sample of projects I've worked on professionally, spanning frontend architecture, UI engineering, and product features shipped to production.`;

export const projectInfoByCategory: Record<ProjectCategory, Record<string, Project>> = {
  personal: personalProjectInfo,
  professional: professionalProjectInfo
};

export const categoryTabs: {key: ProjectCategory; label: string}[] = [
  {key: 'personal', label: 'Personal Projects'},
  {key: 'professional', label: 'Professional Work'}
];
