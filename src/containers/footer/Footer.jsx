import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="gpt3__footer">
      <div className="gpt3__footer-header">
        <h1 className="gradient__text">
          Do you want to step into the future before others
        </h1>
        <button>Request Early Access</button>
      </div>
      <div className="gpt3__footer-content">
        <div className="gpt3__footer-content-logo">
          <h1>GPT-3</h1>
          <p>this the logo</p>
        </div>
        <div className="gpt3__footer-content-links">
          <h6>Links</h6>
          <a href="/">
            <p>Oerrors</p>
          </a>
          <a href="/">
            <p>Oerrors</p>
          </a>
          <a href="#">
            <p>Oerrors</p>
          </a>
          <a href="/">
            <p>Oerrors</p>
          </a>
        </div>
        <div className="gpt3__footer-content-links">
          <h6>company</h6>
          <a href="/">
            <p>Terms & condions</p>
          </a>
          <a href="/">
            <p>Privacy pelcy</p>
          </a>
          <a href="/">
            <p>Terms & condions</p>
          </a>
        </div>
        <div className="gpt3__footer-content-links">
          <h6>Get in touch</h6>
          <a href="/">
            <p>Terms & condions</p>
          </a>
          <a href="/">
            <p>Privacy pelcy</p>
          </a>
          <a href="/">
            <p>Terms & condions</p>
          </a>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>&cop; 2025 GPT-3 All right remined</p>
      </div>
    </div>
  );
}

export default Footer;
