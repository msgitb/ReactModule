import React from "react";
import { useState } from "react";

function TodoInput(props) {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = (ev) => {
    if (!inputValue.length) return;
    console.log(ev);
    if (ev.keyCode === 13 || ev.type === "click") {
      props.addTodo(inputValue);
      setInputValue("");
    }
  };

  const handleInput = (ev) => {
    const { value } = ev.target;
    setInputValue(value);
  };

  return (
    <div className="form">
      <input
        onKeyUp={handleAdd}
        onChange={handleInput}
        value={inputValue}
        type="text"
      />
      <button onClick={handleAdd}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default TodoInput;
