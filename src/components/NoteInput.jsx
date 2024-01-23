import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { HiCheckCircle } from "react-icons/hi2";
import { useLang } from "../context/LangContext";

function NoteInputWrapper({ addNote }) {
  const navigate = useNavigate();
  const { lang } = useLang();

  return <NoteInput navigate={navigate} addNote={addNote} lang={lang} />;
}

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
  }

  onTitleChangeEventHandler = (event) => {
    const inputTitle = event.target.value;

    if (inputTitle.length <= 50) {
      this.setState({
        title: inputTitle,
      });
    }
  };

  onBodyChangeEventHandler = (event) => {
    const inputBody = event.target.innerHTML;
    this.setState(() => {
      return {
        body: inputBody,
      };
    });
  };

  onSubmitEventHandler = async (event) => {
    event.preventDefault();
    await this.props.addNote(this.state);

    this.setState({
      title: "",
      body: "",
    });
    this.props.navigate("/");
  };

  render() {
    return (
      <div className="note-input">
        <form action="" onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">
            {this.props.lang === "en" ? "Characters remaining: " : "Sisa karakter: "}
            {50 - this.state.title.length}
          </p>
          <input name="title" className="note-input__title" type="text" value={this.state.title} onChange={this.onTitleChangeEventHandler} placeholder={this.props.lang === "en" ? "Write your title here" : "Tulis judulmu disini"} required />
          <div
            name="body"
            className="note-input__body"
            value={this.state.body}
            onInput={this.onBodyChangeEventHandler}
            type="text"
            data-placeholder={this.props.lang === "en" ? "Write your notes..." : "Tulis catatanmu..."}
            required
            contentEditable
          ></div>
          <button type="submit">
            <HiCheckCircle />
          </button>
        </form>
      </div>
    );
  }
}

NoteInputWrapper.propTypes = {
  addNote: PropTypes.func.isRequired,
};

NoteInput.propTypes = {
  navigate: PropTypes.func.isRequired,
  addNote: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
};

export default NoteInputWrapper;
