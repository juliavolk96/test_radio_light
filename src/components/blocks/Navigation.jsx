import React from "react";
import './css/Navigation.css'

const Navigation = () => {
  return(
    <div className="navigation-container">
    <h2>
        <span>N</span>
        <span>a</span>
        <span>v</span>
        <span>i</span>
        <span>g</span>
        <span>a</span>
        <span>t</span>
        <span>i</span>
        <span>o</span>
        <span>n</span>
      </h2>      <ul className="navigation-list">
        <li className="navigation-item"><a href="/">Startseite</a></li>
        <li className="navigation-item"><a href="/">Sendeplan</a></li>
        <li className="navigation-item"><a href="/">Teamlist</a></li>
        <li className="navigation-item"><a href="/">Bewerbung</a></li>
        <li className="navigation-item"><a href="/">Radiostatus Infoseite</a></li>
        <li className="navigation-item"><a href="/">Datenschuntz</a></li>
        <li className="navigation-item"><a href="/">Impressum</a></li>
      </ul>
    </div>
  );
}

export default Navigation;