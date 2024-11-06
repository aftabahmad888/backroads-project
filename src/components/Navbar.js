import React from "react";
import logo from "../images/logo.svg";
import { Linkss, socialmedia } from "./Linkss";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          {/* This is for the navbar links  */}
          <ul className="nav-links" id="nav-links">
            {Linkss.map((items) => {
              return (
                <li key={items.id}>
                  <a href={items.href} className="nav-link">
                    {items.text}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* This is for the social media links */}
          <ul className="nav-icons">
            {socialmedia.map((items) => {
              const { id, href, icon } = items;
              return (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="norefferrer"
                    className="nav-icon"
                  >
                    <i className={icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
