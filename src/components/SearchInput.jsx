import React from "react";
import PropTypes from "prop-types";
import { useLang } from "../context/LangContext";

function SearchInput({ keyword, keywordChange }) {
  const { lang } = useLang();

  return (
    <div className="note-search">
      <input name="keyword" type="text" placeholder={lang === "en" ? "search by tittle..." : "cari berdasarkan judul..."} value={keyword} onChange={(event) => keywordChange(event.target.value)} />
    </div>
  );
}

SearchInput.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchInput;
