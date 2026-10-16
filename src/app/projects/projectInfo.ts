export interface ProjectLink {
  /** Button label, e.g. 'GitHub' or 'Live app'. */
  name: string;
  /** Full URL (opens in a new tab) or a path on this site. */
  link: string;
}

export interface Project {
  name: string;
  description: string;
  image: string;
  /**
   * Optional links shown as buttons beside the title. A single URL or path shows as
   * "See project"; use a list of named links to show several, e.g. a repo and a live app.
   */
  link?: string | ProjectLink[];
  /** Optional technologies used, shown as chips under the title and links. */
  tech?: string[];
}

export type ProjectCategory = 'personal' | 'professional';

const personalProjectInfo = {
  interactiveNarrative: {
    name: 'Interactive Narrative',
    description: `This project is a "walking simulator" that takes players on my journey as a first-generation student travelling away for college. The story is told through interactable snippets and visual metaphors. The project was originally built with multiple users in mind (via networking and matchmaking) and I used that to disrupt the control of my own narrative. I did this by having the snippets cycle one sentence at a time, rather than be shown in full. This meant that the last sentence a user reads, would become the first sentence the next user reads.
Thus, as more people interact with the environment the more mixed up the story would become. The project was built using Unity 3D,
Maya3D, and Blender.`,
    image: '/projects/interactive-narrative.webp',
    link: [
      {name: 'Live app', link: 'https://interactivenarrative.azurewebsites.net/'},
      {name: 'GitHub', link: 'https://github.com/raycoti/Interactive-Narrative-'}
    ],
    tech: ['Unity 3D', 'C#', 'Maya', 'Blender']
  },
  gameLevelGenerator: {
    name: 'Game level generator',
    description:
      'A React application for designing levels for grid-based games. Users set the grid dimensions and assign the properties their game needs, producing coordinate-based level data that a game can load directly. I deployed a game on https://playcanv.as/ with a sample level built with this tool.',
    image: '/projects/game-level-generator.webp',
    link: [
      {name: 'Live app', link: 'https://playcanv.as/p/C6vQ4bnn/'},
      {name: 'GitHub', link: 'https://github.com/raycoti/environmentgenerator2'}
    ],
    tech: ['React', 'PlayCanvas']
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
  {key: 'professional', label: 'Professional Work'},
  {key: 'personal', label: 'Personal Projects'}
];
