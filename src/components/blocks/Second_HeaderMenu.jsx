import React from "react";
import './css/HeaderMenu.css'

const HeaderMenu = () => {
  return(
    <nav className="header-menu">
      <ul className="header-menu-list">
        <li className="menu-item"><a href="/" className="item">Startseit</a></li>
        <li className="menu-item"><a href="/" className="item">Sendeplan</a></li>
        <li className="menu-item"><a href="/" className="item">Teamlist</a></li>
        <li className="menu-item"><a href="/" className="item">Bewerbung</a></li>
      </ul>
    </nav>
  );
}

export default HeaderMenu;