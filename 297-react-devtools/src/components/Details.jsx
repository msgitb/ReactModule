import React from "react";

const Details = (props) => {
  return (
    <>
      <p className="info">{props.tel}</p>
      <p className="info">{props.email}</p>
    </>
  );
};

export default Details;
