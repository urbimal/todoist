import React, { useState } from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { AddTask } from '../AddTask';

export const Header = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todoist" />
        </div>
        <div className="settings">
          <ul>
            <li className="settings__add">
              <button
                onClick={() => {
                  setShowQuickAddTask(
                    (prevShowQuickAddTask) => !prevShowQuickAddTask
                  );
                  setShouldShowMain(
                    (prevShouldShowMain) => !prevShouldShowMain
                  );
                }}
                onKeyDown={() => {
                  setShowQuickAddTask(
                    (prevShowQuickAddTask) => !prevShowQuickAddTask
                  );
                  setShouldShowMain(
                    (prevShouldShowMain) => !prevShouldShowMain
                  );
                }}
                type="button"
              >
                +
              </button>
            </li>
            <li className="settings__darkmode">
              <button
                type="button"
                onClick={() => setDarkMode(!darkMode)}
                onKeyDown={() => setDarkMode(!darkMode)}
              >
                <FaPizzaSlice />
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  );
};
