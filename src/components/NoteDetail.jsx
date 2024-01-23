import React from "react";
import PropTypes from "prop-types";
import parser from "html-react-parser";
import { noteItemPropTypes, showFormattedDate } from "../utils";
import ArchiveButton from "../components/ArchiveButton";
import DeleteButton from "../components/DeleteButton";

function NoteDetail({ id, title, body, createdAt, archived, deleteNote, archiveNote }) {
  const formatedDate = showFormattedDate(createdAt);

  return (
    <div className="note-detail">
      <h1>{title}</h1>
      <p className="note-detail__date">{formatedDate}</p>
      <p className="note-detail__body">{parser(body)}</p>
      <div className="note-detail__action">
        <ArchiveButton id={id} archived={archived} onArchive={archiveNote} />
        <DeleteButton id={id} onDelete={deleteNote} />
      </div>
    </div>
  );
}

NoteDetail.propTypes = {
  ...noteItemPropTypes,
  deleteNote: PropTypes.func.isRequired,
  archiveNote: PropTypes.func.isRequired,
};

export default NoteDetail;
