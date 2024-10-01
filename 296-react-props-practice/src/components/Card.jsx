import React from "react";
import ReactDOM from "react-dom";

const Card = (props) => {
  const { name, img, tel, email } = props;

  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{name}</h2>
        <img className="card img circle-img" src={img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{tel}</p>
        <p className="info">{email}</p>
      </div>
    </div>
  );
};

export default Card;
