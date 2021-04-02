import React from "react";
import ReactDOM from "react-dom";

//REMEMBER: inside objects only commas
//hier brauchen wir auch strings
const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "2px solid grey"
};

customStyle.color = "orange";

ReactDOM.render(
  <h1 style={customStyle}>laleluuu</h1>,
  document.getElementById("root")
);
