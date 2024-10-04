import React, { useState } from "react";

function CreateArea(props) {
  const emptyNote = { title: "", content: "" };
  const [note, setNote] = useState(emptyNote);

  const handleSubmit = (ev) => {
    if (note.content.length === 0 && note.title.length === 0)
      return ev.preventDefault();
    props.addNote && props.addNote(note);
    setNote(emptyNote);
    ev.preventDefault();
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
