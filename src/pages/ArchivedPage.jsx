import React from "react";
import PropTypes from "prop-types";
import NotesList from "../components/NotesList";
import SearchInput from "../components/SearchInput";
import { useSearchParams } from "react-router-dom";
import { deleteNote, getArchivedNotes, unarchiveNote } from "../api/network-data";
import LoadingPage from "./LoadingPage";
import { useLang } from "../context/LangContext";

function ArchivedPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { lang } = useLang();

  const title = searchParams.get("title");
  function changeSearchParams(keyword) {
    setSearchParams({ title: keyword });
  }

  return <ArchivedPage onSearch={changeSearchParams} activeKeyword={title} lang={lang} />;
}

class ArchivedPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      keyword: props.activeKeyword || "",
      isLoading: true,
    };
  }

  componentDidMount = async () => {
    const { data } = await getArchivedNotes();

    this.setState(() => {
      return {
        notes: data,
        isLoading: false,
      };
    });
  };

  onDeleteHandler = async (id) => {
    await deleteNote(id);
    const { data } = await getArchivedNotes();

    this.setState(() => {
      return {
        notes: data,
      };
    });
  };

  onUnarchiveHandler = async (id) => {
    await unarchiveNote(id);
    const { data } = await getArchivedNotes();

    this.setState(() => {
      return {
        notes: data,
      };
    });
  };
  onKeywordChange = (keyword) => {
    this.setState(() => {
      return {
        keyword,
      };
    });
    this.props.onSearch(keyword);
  };

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(this.state.keyword.toLowerCase());
    });

    if (this.state.isLoading) return <LoadingPage />;

    return (
      <div className="note-app__body">
        <div className="note-app__body-header">
          <h2>{this.props.lang === "en" ? "Archived Notes" : "Catatan terarsip"}</h2>
          <SearchInput keyword={this.state.keyword} keywordChange={this.onKeywordChange} />
        </div>
        {notes.length > 0 ? <NotesList notes={notes} onDelete={this.onDeleteHandler} onArchive={this.onUnarchiveHandler} /> : <p className="notes-list__empty-message">No archived notes</p>}
      </div>
    );
  }
}

ArchivedPage.propTypes = {
  onSearch: PropTypes.func.isRequired,
  activeKeyword: PropTypes.string,
  lang: PropTypes.string.isRequired,
};

export default ArchivedPageWrapper;
