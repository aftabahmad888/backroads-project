import React from "react";
import { Linkss, socialmedia } from "./Linkss";

const Footer = () => {
  return (
    <div>
      <footer className="section footer">
        <ul className="footer-links">
          {Linkss.map((items) => {
            const { id, href, text } = items;
            return (
              <li key={id}>
                <a href={href} className="footer-link">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="footer-icons">
          {socialmedia.map((items) => {
            const { id, href, icon } = items;
            return (
              <li key={id}>
                <a href={href} target="_blank" className="footer-icon">
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
