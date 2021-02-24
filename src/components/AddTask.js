/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
import { FaRegListAlt, FaRegCalendarAlt } from 'react-icons/fa';
import moment from 'moment';
import { firebase } from '../firebase';
import { useSelectedProjectValue } from '../context';
import { ProjectOverlay } from './ProjectOverlay';
import { TaskDate } from './TaskDate';

export const AddTask = ({
  showAddTaskMain = true,
  showShouldMain = false,
  showQuickAddTask,
  setShowQuickAddTask,
}) => {
  const [task, setTask] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [project, setProject] = useState('');
  const [showMain, setShowMain] = useState(showShouldMain);
  const [showProjectOverlay, setShowProjectOverlay] = useState(false);
  const [showTaskDate, setShowTaskDate] = useState(false);
  const { selectedProject } = useSelectedProjectValue();

  const addTask = () => {
    const projectId = project || selectedProject;
    let collatedDate = '';

    if (projectId === 'TODAY') {
      collatedDate = moment().format('DD/MM/YYYY');
    } else if (projectId === 'NEXT_WEEK') {
      collatedDate = moment().add(7, 'days').format('DD/MM/YYYY');
    }

    return (
      task &&
      projectId &&
      firebase
        .firestore()
        .collection('tasks')
        .add({
          archived: false,
          projectId,
          task,
          date: collatedDate || taskDate,
          userId: '123',
        })
        .then(() => {
          setTask('');
          setProject('');
          setShowMain('');
          setShowProjectOverlay(
            (prevShowProjectOverlay) => !prevShowProjectOverlay
          );
        })
    );
  };

  return (
    <div
      className={showQuickAddTask ? 'add-task add-task__overlay' : 'add-task'}
    >
      {showAddTaskMain && (
        <div
          className="add-task__shallow"
          onClick={() => setShowMain((prevShowMain) => !prevShowMain)}
          onKeyDown={() => setShowMain((prevShowMain) => !prevShowMain)}
          role="button"
        >
          <span className="add-task__plus">+</span>
          <span className="add-task__text">Add Task</span>
        </div>
      )}

      {(showMain || showQuickAddTask) && (
        <div className="add-task__main">
          {showQuickAddTask && (
            <>
              <div>
                <h2 className="header">Quick Add Task</h2>
                <span
                  className="add-task__cancel"
                  onClick={() => {
                    setShowMain((prevShowMain) => !prevShowMain);
                    setShowProjectOverlay(
                      (prevShowProjectOverlay) => !prevShowProjectOverlay
                    );
                    setShowQuickAddTask(
                      (prevShowQuickAddTask) => !prevShowQuickAddTask
                    );
                  }}
                  onKeyDown={() => {
                    setShowMain((prevShowMain) => !prevShowMain);
                    setShowProjectOverlay(
                      (prevShowProjectOverlay) => !prevShowProjectOverlay
                    );
                    setShowQuickAddTask(
                      (prevShowQuickAddTask) => !prevShowQuickAddTask
                    );
                  }}
                  role="button"
                >
                  x
                </span>
              </div>
            </>
          )}
          <ProjectOverlay
            setProject={setProject}
            showProjectOverlay={showProjectOverlay}
            setShowProjectOverlay={setShowProjectOverlay}
          />
          <TaskDate
            setTaskDate={setTaskDate}
            showTaskDate={showTaskDate}
            setShowTaskDate={setShowTaskDate}
          />
          <input
            className="add-task__content"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            type="button"
            className="add-task__submit"
            onClick={() =>
              showQuickAddTask
                ? addTask() &&
                  setShowQuickAddTask(
                    (prevShowQuickAddTask) => !prevShowQuickAddTask
                  )
                : addTask()
            }
            onKeyDown={() =>
              showQuickAddTask
                ? addTask() &&
                  setShowQuickAddTask(
                    (prevShowQuickAddTask) => !prevShowQuickAddTask
                  )
                : addTask()
            }
          >
            Add Task
          </button>
          {!showQuickAddTask && (
            <span
              className="add-task__cancel"
              onClick={() => {
                setShowMain((prevShowMain) => !prevShowMain);
                setShowProjectOverlay(
                  (prevShowProjectOverlay) => !prevShowProjectOverlay
                );
              }}
              onKeyDown={() => {
                setShowMain((prevShowMain) => !prevShowMain);
                setShowProjectOverlay(
                  (prevShowProjectOverlay) => !prevShowProjectOverlay
                );
              }}
              role="button"
            >
              Cancel
            </span>
          )}
          <span
            className="add-task__project"
            onClick={() =>
              setShowProjectOverlay(
                (prevShowProjectOverlay) => !prevShowProjectOverlay
              )
            }
            onKeyDown={() =>
              setShowProjectOverlay(
                (prevShowProjectOverlay) => !prevShowProjectOverlay
              )
            }
            role="button"
          >
            <FaRegListAlt />
          </span>
          <span
            className="add-task__date"
            onClick={() =>
              setShowTaskDate((prevShowTaskDate) => !prevShowTaskDate)
            }
            onKeyDown={() =>
              setShowTaskDate((prevShowTaskDate) => !prevShowTaskDate)
            }
            role="button"
          >
            <FaRegCalendarAlt />
          </span>
        </div>
      )}
    </div>
  );
};
