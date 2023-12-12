import React from "react";

function NoteTab({ archiveTab, activeTab, tabStatus }) {
  return (
    <>
      <div className="note-tab">
        <button onClick={activeTab} className={tabStatus ? "note-tab__button-active" : "note-tab__button"}>
          Active
        </button>
        <button onClick={archiveTab} className={!tabStatus ? "note-tab__button-active" : "note-tab__button"}>
          Archived
        </button>
      </div>
    </>
  );
}

export default NoteTab;
