import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props) {
  console.log(props["get key"]);
  return (
    <div className="card">
      <div className="top">
        <p>{props["get key"]}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Details tel={props.tel} email={props.email}></Details>
      </div>
    </div>
  );
}

export default Card;
