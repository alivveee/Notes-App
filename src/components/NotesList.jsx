import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";
import { noteItemPropTypes } from "../utils";

function NotesList({ notes, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} onDelete={onDelete} onArchive={onArchive} {...note} />
      ))}
    </div>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape(noteItemPropTypes)).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NotesList;
