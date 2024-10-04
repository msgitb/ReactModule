import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <IconButton onMouseDown={handleClick} aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

export default Note;
