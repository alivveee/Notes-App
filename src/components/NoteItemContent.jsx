import React from "react";
import PropTypes from "prop-types";
import parser from "html-react-parser";
import { showFormattedDate } from "../utils";
import { Link } from "react-router-dom";

function NoteItemContent({ id, title, createdAt, body }) {
  const formatedDate = showFormattedDate(createdAt);
  return (
    <div className="note-item__content">
      <h3 className="note-item__title">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <p className="note-item__date">{formatedDate}</p>
      <div className="note-item__body">{parser(body)}</div>
    </div>
  );
}

NoteItemContent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItemContent;
