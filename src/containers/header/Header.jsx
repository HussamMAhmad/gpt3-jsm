import React from "react";
import "./header.css";
import header from "../../assets/Header Illustration.png";
import group from "../../assets/Group 81.png";

function Heeader() {
  return (
    <div className="gpt3__header gradient__bg" id="home">
      <div className="gpt3__header-des">
        <div className="gpt3__header-des-text">
          <h1 className="gradient__text">
            Let's Build Something amazing with GPT-3 OpenAI
          </h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
        </div>
        <div className="gpt3__header-des-form">
          <input
            type="email"
            className="header-des-form_email"
            placeholder="Your Email Address"
          />
          <input
            type="submit"
            value="Get started"
            className="header-des-form_submit"
          />
        </div>
        <div className="gpt3__header-des-visits">
          <div className="gpt3__header-des-group">
            <img src={group} alt="group of people" />
          </div>
          <p>1,600 people requested acess a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={header} alt="feature" />
      </div>
    </div>
  );
}

export default Heeader;
