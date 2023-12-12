import React from "react";

const NoteArchived = ({ id, title, body, createdAt, dateFormat, onDelete, onActive }) => {
  return (
    <>
      <div className="note-archived">
        <div className="note-archived__content">
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
        <div className="note-archived__action">
          <p>{dateFormat(createdAt)}</p>
          <div className="note-archived__action-button">
            <button onClick={() => onActive(id)} className="note-archived__active">
              Active
            </button>
            <button onClick={() => onDelete(id)} className="note-archived__delete">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteArchived;
