import React from "react";
import ReactDOM from "react-dom";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <p>Copyright {year}</p>
    </footer>
  );
};

export default Footer;
