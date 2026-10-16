'use client';

import {useState} from 'react';
import ResumeLink from '../resumeLink';
import ProjectItem from './projectItem';
import {handleTabListKeyDown} from './tabKeyboard';
import {
  categoryTabs,
  professionalOverview,
  projectInfoByCategory,
  type ProjectCategory
} from './projectInfo';

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('professional');
  const [selectedProjectKey, setSelectedProjectKey] = useState<string | null>(null);

  const currentProjectInfo = projectInfoByCategory[activeCategory];
  const projectEntries = Object.entries(currentProjectInfo);
  // Show the category's first project until one is picked.
  const activeProjectKey = selectedProjectKey ?? Object.keys(currentProjectInfo)[0];
  const selectedProject = activeProjectKey ? currentProjectInfo[activeProjectKey] : undefined;

  const handleCategoryChange = (category: ProjectCategory) => {
    setActiveCategory(category);
    setSelectedProjectKey(null);
  };

  return (
    <div className='flex flex-col p-8'>
      <h1 className='mb-8 font-heading text-4xl capitalize'>Projects</h1>

      {/* Tabs follow the WAI-ARIA pattern: Tab reaches the selected tab, arrow keys move between tabs. */}
      <div
        role='tablist'
        aria-label='Project categories'
        onKeyDown={handleTabListKeyDown}
        className='mb-6 flex gap-6 border-b border-card-border'
      >
        {categoryTabs.map(({key, label}) => (
          <button
            key={key}
            id={`category-tab-${key}`}
            type='button'
            role='tab'
            aria-selected={activeCategory === key}
            aria-controls='category-panel'
            tabIndex={activeCategory === key ? 0 : -1}
            onClick={() => handleCategoryChange(key)}
            className={`-mb-px cursor-pointer pb-2 font-heading text-lg ${
              activeCategory === key
                ? 'border-b-2 border-accent font-bold'
                : 'text-ink/70 hover:text-ink'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div id='category-panel' role='tabpanel' aria-labelledby={`category-tab-${activeCategory}`}>
        {activeCategory === 'professional' && (
          <div className='mb-8 max-w-2xl rounded-2xl border border-card-border bg-card-tint px-6 py-4 shadow-card'>
            <p className='font-body leading-relaxed'>{professionalOverview}</p>
            <div className='mt-4'>
              <ResumeLink label='View full resume' />
            </div>
          </div>
        )}

        <div className='flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-0'>
          {/* Project tabs: a scrollable row on phones, a sticky column beside the card on wider screens.
            There the active tab joins the card: no right border or rounding, overlapping the card's
            left border by 1px, starting below the card's rounded top corner. */}
          {projectEntries.length > 0 && (
            <div
              role='tablist'
              aria-label='Projects'
              onKeyDown={handleTabListKeyDown}
              className='-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:sticky lg:top-24 lg:z-10 lg:mx-0 lg:w-64 lg:shrink-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pt-4 lg:pb-0'
            >
              {projectEntries.map(([key, project]) => {
                const isActive = activeProjectKey === key;
                return (
                  <button
                    key={key}
                    id={`project-tab-${key}`}
                    type='button'
                    role='tab'
                    aria-selected={isActive}
                    aria-controls='project-panel'
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setSelectedProjectKey(key)}
                    className={`shrink-0 cursor-pointer rounded-xl border px-4 py-3 text-left font-heading whitespace-nowrap capitalize transition-colors lg:whitespace-normal ${
                      isActive
                        ? 'border-l-4 border-card-border border-l-accent bg-card font-bold shadow-card lg:w-[calc(100%+1px)] lg:rounded-r-none lg:border-r-0 lg:shadow-none'
                        : 'border-transparent text-ink/70 hover:bg-card/60 hover:text-ink lg:w-[calc(100%-0.75rem)]'
                    }`}
                  >
                    {project.name}
                  </button>
                );
              })}
            </div>
          )}
          {selectedProject && (
            <ProjectItem
              panelId='project-panel'
              tabId={`project-tab-${activeProjectKey}`}
              name={selectedProject.name}
              description={selectedProject.description}
              imagePath={selectedProject.image}
              link={selectedProject.link}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
