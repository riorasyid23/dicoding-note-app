import React from "react";
import NoteTab from "./NoteTab";
import NoteSearch from "./NoteSearch";
import NoteAdd from "./NoteAdd";

function NoteAction({
  archiveTab,
  activeTab,
  tabStatus,
  handleSearch,
  searchQuery,
  onModalNote,
  filteredArchivedNotes,
}) {
  return (
    <>
      <div className="note-action">
        <NoteTab activeTab={activeTab} archiveTab={archiveTab} tabStatus={tabStatus} />
        <NoteSearch
          handleSearch={handleSearch}
          searchQuery={searchQuery}
          filteredArchivedNotes={filteredArchivedNotes}
        />
        <NoteAdd onModalNote={onModalNote} />
      </div>
    </>
  );
}

export default NoteAction;
