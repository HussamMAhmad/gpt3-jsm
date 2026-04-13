import React from "react";
import "./feature.css";
function Feature({ title, text }) {
  return (
    <div className="gpt3__feature">
      <h1 className="line_color">{title}</h1>
      <p>{text}</p>
    </div>
  );
}

export default Feature;
