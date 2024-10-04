import React from "react";

function Note(props) {
  const handleDeleteClick = () => {
    console.log("Deleting" + props.id);
    props.deleteNote && props.deleteNote(props.id);
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDeleteClick}>DELETE</button>
    </div>
  );
}

export default Note;
