import React, { Component } from "react";
import NoteItem from "./NoteItem";
import NoteArchived from "./NoteArchived";
import NoteAction from "./NoteAction";
import NoteActiveFiltered from "./NoteActiveFiltered";
import NoteArchivedFiltered from "./NoteArchivedFiltered";
import NoteModal from "./NoteModal";

class NoteMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: true,
      searchQuery: "",
    };

    this.onArchiveTab = this.onArchiveTab.bind(this);
    this.onActiveTab = this.onActiveTab.bind(this);
    this.onSearchInput = this.onSearchInput.bind(this);
  }
  onArchiveTab() {
    this.setState(() => {
      return {
        activeTab: false,
      };
    });
  }

  onActiveTab() {
    this.setState(() => {
      return {
        activeTab: true,
      };
    });
  }

  onSearchInput(event) {
    this.setState(() => {
      return {
        searchQuery: event.target.value,
      };
    });
  }

  componentDidUpdate(prev) {
    if (prev.formModalNote !== this.props.formModalNote) {
      this.setState({
        formModalNote: this.props.formModalNote,
      });
    }
  }
  render() {
    const activeNotes = this.props.notes.filter((note) => !note.archived);
    const archivedNotes = this.props.notes.filter((note) => note.archived);
    const searchQuery = this.state.searchQuery.toLowerCase();

    const isSubstringInOrder = (mainString, substring) => {
      let substringIndex = 0;

      for (let char of mainString) {
        if (char === substring[substringIndex]) {
          substringIndex++;

          if (substringIndex === substring.length) {
            return true;
          }
        }
      }

      return false;
    };

    const filteredNotes = this.props.notes.filter((note) => {
      return isSubstringInOrder(note.title.toLowerCase(), searchQuery);
    });

    const filteredActiveNotes = filteredNotes.filter((note) => !note.archived);
    const filteredArchivedNotes = filteredNotes.filter((note) => note.archived);

    return (
      <>
        <NoteAction
          archiveTab={this.onArchiveTab}
          activeTab={this.onActiveTab}
          tabStatus={this.state.activeTab}
          searchQuery={searchQuery}
          onModalNote={this.props.onModalNote}
          handleSearch={this.onSearchInput}
          filteredArchivedNotes={filteredArchivedNotes}
        />
        {this.state.formModalNote ? (
          <>
            <NoteModal
              onModalNote={this.props.onModalNote}
              onSubmitEventHandler={this.props.onSubmitEventHandler}
              onTitleChange={this.props.onTitleChange}
              onBodyChange={this.props.onBodyChange}
              titleValue={this.props.titleValue}
              titleLength={this.props.titleLength}
              onHandleKeyDown={this.props.onHandleKeyDown}
            />
            <div className="overlay" onClick={this.props.onModalNote}></div>
          </>
        ) : (
          ""
        )}
        {searchQuery.length > 0 ? (
          <>
            <main className="note-main">
              <div className={this.state.activeTab ? "activeNotes" : "hide-tab"}>
                {filteredActiveNotes.length === 0 ? (
                  <p>Note Active Tidak ditemukan</p>
                ) : (
                  <>
                    {filteredActiveNotes.map((note) => (
                      <NoteActiveFiltered
                        key={note.id}
                        dateFormat={this.props.dateFormat}
                        onDelete={this.props.onDelete}
                        onArchive={this.props.onArchive}
                        {...note}
                      />
                    ))}
                  </>
                )}
              </div>

              <div className={!this.state.activeTab ? "archivedNotes" : "hide-tab"}>
                {filteredArchivedNotes.length === 0 ? (
                  <p>Note Archived Tidak ditemukan</p>
                ) : (
                  <>
                    {filteredArchivedNotes.map((note) => (
                      <NoteArchivedFiltered
                        key={note.id}
                        dateFormat={this.props.dateFormat}
                        onDelete={this.props.onDelete}
                        onActive={this.props.onActive}
                        {...note}
                      />
                    ))}
                  </>
                )}
              </div>
            </main>
          </>
        ) : (
          <>
            <main className="note-main">
              <div id="active-notes" className={this.state.activeTab ? "activeNotes" : "hide-tab"}>
                {activeNotes.length === 0 ? (
                  <p>Tidak ada Active Notes</p>
                ) : (
                  <>
                    {activeNotes.map((note) => (
                      <NoteItem
                        key={note.id}
                        dateFormat={this.props.dateFormat}
                        onDelete={this.props.onDelete}
                        onArchive={this.props.onArchive}
                        activeTab={this.state.activeTab}
                        {...note}
                      />
                    ))}
                  </>
                )}
              </div>

              <div id="archived-notes" className={!this.state.activeTab ? "archivedNotes" : "hide-tab"}>
                {archivedNotes.length === 0 ? (
                  <p>Tidak ada Archived Notes</p>
                ) : (
                  <>
                    {archivedNotes.map((note) => (
                      <NoteArchived
                        key={note.id}
                        dateFormat={this.props.dateFormat}
                        onDelete={this.props.onDelete}
                        onActive={this.props.onActive}
                        {...note}
                      />
                    ))}
                  </>
                )}
              </div>
            </main>
          </>
        )}
      </>
    );
  }
}

export default NoteMain;
