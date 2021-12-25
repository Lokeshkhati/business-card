import React from "react";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import hashnode from "../images/hashnode.svg";
import github from "../images/github.svg";

export default function Footer() {
  return (
    <footer>
      <a href="https://twitter.com/Lokeshkhati12" target="_blank">
        <img className="footer-link" src={twitter} />
      </a>
      <a href="#" target="_blank">
        <img className="footer-link" src={instagram} />
      </a>
      <a href="https://hashnode.com/@Lokesh005" target="_blank">
        <img className="footer-link" src={hashnode} />
      </a>
      <a href="https://github.com/Lokeshkhati" target="_blank">
        <img className="footer-link" src={github} />
      </a>
    </footer>
  );
}
