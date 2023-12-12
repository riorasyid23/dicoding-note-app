import React, { Component } from "react";
import { getInitialData, showFormattedDate } from "../utils";
import Header from "./Header";
import NoteMain from "./NoteMain";

class NoteApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      notes: getInitialData(),
      formModalNote: false,
      titleLength: 50,
    };

    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
    this.onActiveEventHandler = this.onActiveEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onModalNote = this.onModalNote.bind(this);
    this.onHandleKeyDown = this.onHandleKeyDown.bind(this);
  }

  onDeleteEventHandler(id) {
    if (confirm("Apakah anda yakin ingin menghapus Note ini ?")) {
      const notes = this.state.notes.filter((note) => note.id !== id);
      this.setState({ notes });
    }
  }

  onArchiveEventHandler(id) {
    const updatedArchivedNotes = this.state.notes
      .filter((note) => note.id === id)
      .map((note) => (note.archived = !note.archived));
    this.setState({ updatedArchivedNotes });
    console.log(this.state.notes);
  }

  onActiveEventHandler(id) {
    const updatedActiveNotes = this.state.notes
      .filter((note) => note.id === id)
      .map((note) => (note.archived = !note.archived));
    this.setState({ updatedActiveNotes });
    console.log(this.state.notes);
  }

  onSubmitEventHandler(e) {
    e.preventDefault();
    this.setState(() => {
      return {
        notes: [
          ...this.state.notes,
          {
            id: +new Date(),
            title: this.state.title,
            body: this.state.body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
        formModalNote: !this.state.formModalNote,
        title: "",
      };
    });
  }
  onTitleChange(e) {
    const newTitle = e.target.value;
    if (newTitle.length <= this.state.titleLength) {
      this.setState(() => {
        return {
          title: newTitle,
        };
      });
    }
  }
  onHandleKeyDown(e) {
    if (this.state.title.length >= this.state.titleLength && e.key !== "Backspace" && e.key !== "Delete") {
      e.preventDefault();
    }
  }
  onBodyChange(e) {
    e.preventDefault();
    this.setState(() => {
      return {
        body: e.target.value,
      };
    });
  }

  onModalNote() {
    this.setState(() => {
      return {
        title: "",
        formModalNote: !this.state.formModalNote,
      };
    });
  }

  render() {
    return (
      <>
        <Header />
        <NoteMain
          notes={this.state.notes}
          dateFormat={showFormattedDate}
          onDelete={this.onDeleteEventHandler}
          onArchive={this.onArchiveEventHandler}
          onActive={this.onActiveEventHandler}
          formModalNote={this.state.formModalNote}
          onSubmitEventHandler={this.onSubmitEventHandler}
          onTitleChange={this.onTitleChange}
          onBodyChange={this.onBodyChange}
          onModalNote={this.onModalNote}
          titleValue={this.state.title}
          titleLength={this.state.titleLength}
          onHandleKeyDown={this.onHandleKeyDown}
        />
      </>
    );
  }
}

export default NoteApp;
