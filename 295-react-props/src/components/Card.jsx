import React from "react";
import ReactDom from "react-dom";

const Card = (props) => {
  const { name, imgSrc, number, email } = props;
  return (
    <>
      <h2>{name}</h2>
      <img src={imgSrc} alt="avatar_img" />
      <p>{number}</p>
      <p>{email}</p>
    </>
  );
};

export default Card;
