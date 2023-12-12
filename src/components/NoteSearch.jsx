import React from "react";

function NoteSearch({ handleSearch, filteredArchivedNotes }) {
  return (
    <>
      <div className="note-search">
        <input type="text" className="note-search__input" onChange={handleSearch} />
        <button
          className="note-search__button"
          onClick={() => console.log("FOUND NOTES:", filteredArchivedNotes)}
        ></button>
      </div>
    </>
  );
}

export default NoteSearch;
