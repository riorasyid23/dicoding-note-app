import React from "react";

function NoteModal({
  onModalNote,
  onSubmitEventHandler,
  onTitleChange,
  onBodyChange,
  titleValue,
  titleLength,
  onHandleKeyDown,
}) {
  return (
    <>
      <div className="note-modal">
        <span className="close-icon" onClick={onModalNote}></span>
        <form action="" className="note-modal__form" onSubmit={onSubmitEventHandler}>
          <input
            type="text"
            name="title"
            id=""
            placeholder="Note Title (Max 50 Characters)"
            className="note-modal__form-title"
            onChange={onTitleChange}
            onKeyDown={onHandleKeyDown}
            required
          />
          <p
            style={
              titleValue.length === 0
                ? { display: "none" }
                : titleValue.length > 0 && titleValue.length > 40
                ? { color: "red", display: "block" }
                : { color: "green", display: "block" }
            }
          >
            Karakter judul tersisa :{titleLength - titleValue.length}
          </p>
          <textarea
            name="body"
            id=""
            cols="30"
            rows="10"
            className="note-modal__form-body"
            placeholder="Note Description"
            onChange={onBodyChange}
            required
          ></textarea>
          <div className="note-modal__action">
            <button type="submit" className="note-modal__action-save">
              Simpan
            </button>
            <button type="button" className="note-modal__action-cancel" onClick={onModalNote}>
              Batal
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NoteModal;
