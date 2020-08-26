import React, { useState } from 'react';
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from 'react-icons/fa';
import { useSelectedProjectValue } from '../../context';
import { Projects } from './Projects';
import { AddProject } from '../AddProject';

export const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState('inbox');
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar">
      <ul className="sidebar__generic">
        <li className={active === 'inbox' ? 'active' : undefined}>
          <div
            onClick={() => {
              setActive('inbox');
              setSelectedProject('INBOX');
            }}
            onKeyDown={() => {
              setActive('inbox');
              setSelectedProject('INBOX');
            }}
            role="button"
          >
            <span>
              <FaInbox />
            </span>
            <span>Inbox</span>
          </div>
        </li>
        <li className={active === 'today' ? 'active' : undefined}>
          <div
            onClick={() => {
              setActive('today');
              setSelectedProject('TODAY');
            }}
            onKeyDown={() => {
              setActive('today');
              setSelectedProject('TODAY');
            }}
            role="button"
          >
            <span>
              <FaRegCalendar />
            </span>
            <span>Today</span>
          </div>
        </li>
        <li className={active === 'next_week' ? 'active' : undefined}>
          <div
            onClick={() => {
              setActive('next_week');
              setSelectedProject('NEXT_WEEK');
            }}
            onKeyDown={() => {
              setActive('next_week');
              setSelectedProject('NEXT_WEEK');
            }}
            role="button"
          >
            <span>
              <FaRegCalendarAlt />
            </span>
            <span>Next Week</span>
          </div>
        </li>
      </ul>
      <div
        className="sidebar__middle"
        onClick={() => setShowProjects(!showProjects)}
        onKeyDown={() => setShowProjects(!showProjects)}
        role="button"
      >
        <span>
          <FaChevronDown
            className={() => (showProjects ? 'hidden-projects' : undefined)}
          />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      {showProjects && <AddProject />}
    </div>
  );
};
