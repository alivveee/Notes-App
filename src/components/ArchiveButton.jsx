import React from "react";
import PropTypes from "prop-types";
import { HiDocumentArrowDown } from "react-icons/hi2";
import { IoArrowUndoCircle } from "react-icons/io5";

function ArchiveButton({ id, archived, onArchive }) {
  return (
    <button className="note-button__archive" onClick={() => onArchive(id)}>
      {archived ? <IoArrowUndoCircle /> : <HiDocumentArrowDown />}
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
