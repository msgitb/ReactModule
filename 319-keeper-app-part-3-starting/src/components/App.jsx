import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([{ id: 0, title: "1", content: "1" }]);

  const deleteNote = (id) => {
    console.log("DELETING " + id);
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const addNote = (note) => {
    console.log(note);
    setNotes((prev) => [
      ...prev,
      { ...note, id: prev.length ? prev.slice(prev.length - 1)[0].id + 1 : 0 },
    ]);
  };

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, i) => (
        <Note
          id={note.id}
          key={i}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
