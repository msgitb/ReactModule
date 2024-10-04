import React from "react";
import List from "./List";
import { useState } from "react";
import Heading from "./Heading";
import TodoInput from "./TodoInput";

function App() {
  const [todos, setTodos] = useState(["0", "1", "2", "3"]);

  const addTodo = (val) => {
    setTodos((prev) => {
      return [...prev, val];
    });
  };

  const deleteItem = (id) => {
    setTodos((prev) => {
      return prev.filter((item, idx) => idx !== id);
    });
  };

  return (
    <div className="container">
      <Heading />
      <TodoInput addTodo={addTodo}></TodoInput>
      <List onChecked={deleteItem} todos={todos}></List>
    </div>
  );
}

export default App;
