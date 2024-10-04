import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

const getNodeElement = (note) => (
  <Note key={note.key} title={note.title} content={note.content}></Note>
);

const App = () => {
  return (
    <div>
      <Header />
      {notes.map(getNodeElement)}
      <Footer />
    </div>
  );
};

export default App;
