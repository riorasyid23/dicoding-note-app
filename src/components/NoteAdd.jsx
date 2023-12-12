import React from "react";

function NoteAdd({ onModalNote }) {
  return (
    <>
      <button className="note-add__button" onClick={onModalNote}>
        <span className="note-add__button-mobile" onClick={onModalNote}></span>
        <p>Tambah Note</p>
      </button>
    </>
  );
}

export default NoteAdd;
