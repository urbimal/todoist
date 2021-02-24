/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { firebase } from '../firebase';

export const Checkbox = ({ id }) => {
  const archiveTask = () => {
    firebase.firestore().collection('tasks').doc(id).update({ archived: true });
  };

  return (
    <div
      className="checkbox-holder"
      onClick={() => archiveTask()}
      onKeyDown={() => archiveTask()}
    >
      <span className="checkbox" />
    </div>
  );
};
