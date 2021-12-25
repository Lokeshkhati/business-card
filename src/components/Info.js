import React from "react";
import images from "../images/Lokesh.PNG";
import email from "../images/email.png";
import linkedin from "../images/linkedin.png";

export default function Info() {
  return (
    <header>
      <img className="header-image" src={images} />
      <h2 className="center">LOKESH KHATI</h2>
      <p  className="center sub-heading">Frontend Developer</p>
      <a
        className="center website-link"
        href="https://lokesh-khati.netlify.app/"
        target="_blank"
      >
        lokeshkhati.website
      </a>
      <div className="social-links">
        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" className="social-link">
          <img className="social-img" src={email} />
          <p>Email</p>
        </a>
        <a  href="https://www.linkedin.com/in/Lokeshkhati" target="_blank" className="social-link linkedin-link">
          <img className="social-img" src={linkedin} />
          <p>LinkedIn</p>
        </a>
      </div>
    </header>
  );
}
