import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import ActivityUploader from './ActivityUploader';
import FileUploader from './FileUploader';
import NoteUploader from './NoteUploader';

const EditorMainPage = props => {
  const [noteActive, setNoteActive] = useState(true);
  const [activityActive, setActivityActive] = useState(false);
  const [filesActive, setFilesActive] = useState(false);
  const noteClickHandler = () => {
    setNoteActive(true);
    setActivityActive(false);
    setFilesActive(false);
  };
  const activityClickHandler = () => {
    setNoteActive(false);
    setActivityActive(true);
    setFilesActive(false);
  };
  const filesClickHandler = () => {
    setNoteActive(false);
    setActivityActive(false);
    setFilesActive(true);
  };
  return (
    <div>
      <h5 className="p-3">Timeline</h5>
      <ButtonGroup className="ms-4">
        {/* variant="falcon-primary" */}
        <Button
          size="sm"
          variant={!noteActive ? 'falcon-primary' : 'primary'}
          onClick={noteClickHandler}
        >
          Note
        </Button>
        <Button
          size="sm"
          variant={!activityActive ? 'falcon-primary' : 'primary'}
          onClick={activityClickHandler}
        >
          Activity
        </Button>
        <Button
          size="sm"
          variant={!filesActive ? 'falcon-primary' : 'primary'}
          onClick={filesClickHandler}
        >
          Files
        </Button>
      </ButtonGroup>
      <div className="px-4 pb-1">
        {noteActive && <NoteUploader />}
        {filesActive && <FileUploader />}
        {activityActive && (
          <ActivityUploader
            setShowAddActivity={props.setShowAddActivity}
            showAddActivity={props.showAddActivity}
          />
        )}
      </div>
    </div>
  );
};

export default EditorMainPage;
