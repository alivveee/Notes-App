import React from "react";
import PropTypes from "prop-types";
import NoteDetail from "../components/NoteDetail";
import { useNavigate, useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../api/network-data";
import LoadingPage from "./LoadingPage";

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  return <DetailPage id={id} navigate={navigate} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: null,
      isLoading: true,
    };
  }

  componentDidMount = async () => {
    const { data } = await getNote(this.props.id);

    this.setState(() => {
      return {
        note: data,
        isLoading: false,
      };
    });
  };

  onDeleteHandler = async (id) => {
    await deleteNote(id);
    this.props.navigate("/");
  };

  onArchiveHandler = async (id) => {
    if (this.state.note.archived) {
      await unarchiveNote(id);
    } else {
      await archiveNote(id);
    }
    this.props.navigate("/");
  };

  render() {
    if (this.state.isLoading) return <LoadingPage />;

    if (!this.state.note) return <NotFoundPage />;

    return (
      <div className="note-app__body">
        <NoteDetail {...this.state.note} deleteNote={this.onDeleteHandler} archiveNote={this.onArchiveHandler} />
      </div>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
