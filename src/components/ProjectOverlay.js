/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import { useProjectsValue } from '../context';

export const ProjectOverlay = ({ setProject, setShowProjectOverlay }) => {
  const { projects } = useProjectsValue();

  return (
    projects &&
    setShowProjectOverlay && (
      <div className="project-overlay">
        <ul className="project-overlay__list">
          {projects.map((project) => (
            <li key={project.projectId}>
              <div
                onClick={() => {
                  setProject(project.projectId);
                  setShowProjectOverlay(
                    (prevShowProjectOverlay) => !prevShowProjectOverlay
                  );
                }}
                onKeyDown={() => {
                  setProject(project.projectId);
                  setShowProjectOverlay(
                    (prevShowProjectOverlay) => !prevShowProjectOverlay
                  );
                }}
                role="button"
              >
                {project.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};
