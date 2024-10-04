import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
  const { todos } = props;
  return (
    <div>
      <ul>
        {todos &&
          todos.map((todo, ix) => (
            <ListItem
              onChecked={props.onChecked}
              key={ix}
              id={ix}
              todo={todo}
            ></ListItem>
          ))}
      </ul>
    </div>
  );
};

export default List;
