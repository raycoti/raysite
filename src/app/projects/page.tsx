'use client';

import {useState} from 'react';
import ProjectItem from './projectItem';
import {
  categoryTabs,
  professionalOverview,
  projectInfoByCategory,
  type ProjectCategory
} from './projectInfo';

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('personal');
  const [selectedProjectKey, setSelectedProjectKey] = useState<string | null>(null);

  const currentProjectInfo = projectInfoByCategory[activeCategory];
  const selectedProject = selectedProjectKey ? currentProjectInfo[selectedProjectKey] : undefined;

  const handleCategoryChange = (category: ProjectCategory) => {
    setActiveCategory(category);
    setSelectedProjectKey(null);
  };

  return (
    <div className='flex flex-col p-8'>
      <h1 className='mb-8 font-heading text-4xl capitalize'>Projects</h1>

      <div role='tablist' className='mb-6 flex gap-6 border-b border-amber-200'>
        {categoryTabs.map(({key, label}) => (
          <button
            key={key}
            type='button'
            role='tab'
            aria-selected={activeCategory === key}
            onClick={() => handleCategoryChange(key)}
            className={`-mb-px cursor-pointer pb-2 font-heading text-lg ${
              activeCategory === key
                ? 'border-b-2 border-amber-500 font-bold'
                : 'text-gray-500 hover:text-black'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {activeCategory === 'professional' && (
        <p className='mb-8 max-w-2xl font-body leading-relaxed'>{professionalOverview}</p>
      )}

      <div className='flex flex-col gap-8 sm:flex-row'>
        <ul className='flex flex-col gap-2'>
          {Object.entries(currentProjectInfo).map(([key, project]) => (
            <li key={key}>
              <button
                type='button'
                className={`cursor-pointer text-left font-heading capitalize hover:underline ${
                  selectedProjectKey === key ? 'font-bold' : ''
                }`}
                onClick={() => setSelectedProjectKey(key)}
              >
                {project.name}
              </button>
            </li>
          ))}
        </ul>
        {selectedProject && (
          <ProjectItem
            name={selectedProject.name}
            description={selectedProject.description}
            imagePath={selectedProject.image}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
