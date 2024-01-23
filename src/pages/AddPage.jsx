import React from "react";
import NoteInput from "../components/NoteInput";
import { addNote } from "../api/network-data";

const AddPage = () => {
  const onAddNoteHandler = async (note) => {
    await addNote(note);
  };
  return (
    <div className="note-app__body">
      <NoteInput addNote={onAddNoteHandler} />
    </div>
  );
};

export default AddPage;
