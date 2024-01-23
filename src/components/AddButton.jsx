import React from "react";
import { HiPlusCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <button className="note-button__add">
      <Link to="/add">
        <HiPlusCircle />
      </Link>
    </button>
  );
};

export default AddButton;
