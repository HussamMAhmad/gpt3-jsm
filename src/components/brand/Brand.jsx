import React from "react";
import { google, slack, atlssian, dropbox, shopifly } from "./import";
import "./brand.css";

function Brand() {
  return (
    <div className="gpt3__brand sectoin-padding">
      <img src={google} alt="google" />
      <img src={slack} alt="slack" />
      <img src={atlssian} alt="atlssian" />
      <img src={dropbox} alt="dropbox" />
      <img src={shopifly} alt="shopifly" />
    </div>
  );
}

export default Brand;
