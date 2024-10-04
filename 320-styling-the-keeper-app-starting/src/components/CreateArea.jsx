import React, { useState, useRef } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Fab from "@mui/material/Fab";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [focused, setFocused] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputReference = useRef(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });

    inputReference.current.focus();
    event.preventDefault();
  }

  const handleFocus = (ev) => {
    if (
      (ev.relatedTarget && ev.relatedTarget.name === "content") ||
      (ev.relatedTarget && ev.relatedTarget.name === "title") ||
      (ev.relatedTarget && ev.relatedTarget.id === "fab")
    )
      return;

    setFocused((prev) => !prev);
  };

  return (
    <div>
      <Zoom in={true} timeout={2000}>
        <form className="create-note">
          <input
            ref={inputReference}
            autoFocus
            onFocus={handleFocus}
            onBlur={handleFocus}
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />

          {focused && (
            <>
              <textarea
                onBlur={handleFocus}
                name="content"
                onChange={handleChange}
                value={note.content}
                placeholder="Take a note..."
                rows="3"
              />
              <Zoom in={true} timeout={1000}>
                <Fab id="fab" onClick={submitNote}>
                  <AddCircleIcon></AddCircleIcon>
                </Fab>
              </Zoom>
            </>
          )}
        </form>
      </Zoom>
    </div>
  );
}

export default CreateArea;
