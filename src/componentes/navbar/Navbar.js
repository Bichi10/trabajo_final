import { useState } from "react"
import React from 'react';
import '../navbar/navbar.css';
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Mundial Qatar 2022
      </a>
      <button
        className="hamburger"
        onClick ={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        {/* hamburger svg code... */}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul >
          <li>
            <NavLink to="/#"> Home</NavLink> 
          </li>
          <li>
            <NavLink to="/Argentina"> Argentina</NavLink> 
          </li>
          <li>
          <NavLink to="/Contacto"> Contacto</NavLink> 
          </li>
        </ul>
      </div>
    </nav>
  );
}