'use client';

import {useState} from 'react';
import {Nunito} from 'next/font/google';
import ProjectItem from './projectItem';

const nunito = Nunito({subsets: ['latin']});

const projectNameInfo = {
  interactiveNarrative: {
    name: 'Interactive Narative',
    description: `This project is a "walking simulator that takes players on my journey as a first-generation student travelling away for college. The story is told through interactable snippets and visual metaphors. The project was originally built with multiple users in mind (via networking and matchmaking) and I used that to disrupt the control of my own narrative. I did this by having the snippets cycle one sentence at a time, rather than be shown in full. This meant that the last sentence a user reads, would become the first sentence the next user reads.
Thus, as more people interact with the environment the more mixed up the story would become. The project was built using Unity 3D,
Maya3D, and Blender.`,
    image: ''
  }
} as const;

type ProjectNames = keyof typeof projectNameInfo;

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectNames | null>(null);

  return (
    <div className='flex flex-col p-8'>
      <h1 className={`${nunito.className} text-4xl capitalize mb-8`}>Projects</h1>
      <div className='flex flex-col sm:flex-row gap-8'>
        <ul className='flex flex-col gap-2'>
          {Object.keys(projectNameInfo).map((key) => {
            const projectKey = key as ProjectNames;
            return (
              <li key={projectKey}>
                <button
                  type='button'
                  className={`${nunito.className} capitalize text-left hover:underline cursor-pointer ${
                    selectedProject === projectKey ? 'font-bold' : ''
                  }`}
                  onClick={() => setSelectedProject(projectKey)}
                >
                  {projectNameInfo[projectKey].name}
                </button>
              </li>
            );
          })}
        </ul>
        {selectedProject && (
          <ProjectItem
            name={projectNameInfo[selectedProject].name}
            description={projectNameInfo[selectedProject].description}
            imagePath={projectNameInfo[selectedProject].image}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;

export const projectList = Object.keys(projectNameInfo).map((projectName) => {
  return projectNameInfo[projectName as ProjectNames];
});
