import React from "react";

function NoteActiveFiltered({ id, title, body, createdAt, dateFormat, onDelete, onArchive }) {
  return (
    <>
      <div className="note-item">
        <div className="note-item__content">
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
        <div className="note-item__action">
          <p>{dateFormat(createdAt)}</p>
          <div className="note-item__action-button">
            <button onClick={() => onArchive(id)} className="note-item__archive">
              Archive
            </button>
            <button onClick={() => onDelete(id)} className="note-item__delete">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoteActiveFiltered;
