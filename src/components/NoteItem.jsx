import React from "react";
import PropTypes from "prop-types";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";
import { noteItemPropTypes } from "../utils";

function NoteItem({ title, createdAt, body, id, onDelete, onArchive, archived }) {
  return (
    <div className="note-item">
      <NoteItemContent id={id} title={title} createdAt={createdAt} body={body} />
      <NoteItemAction id={id} archived={archived} onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
}

NoteItem.propTypes = {
  ...noteItemPropTypes,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NoteItem;
