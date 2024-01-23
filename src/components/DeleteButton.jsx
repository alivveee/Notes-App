import React from "react";
import PropTypes from "prop-types";
import { HiTrash } from "react-icons/hi2";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="note-button__delete" onClick={() => onDelete(id)}>
      <HiTrash />
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
