import React from "react";
import { useState } from "react";

const ListItem = (props) => {
  const handleClick = () => {
    props.onChecked(props.id);
  };

  return <li onClick={handleClick}>{props.todo}</li>;
};

export default ListItem;
