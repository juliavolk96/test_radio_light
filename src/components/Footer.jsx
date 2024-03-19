import React from "react";
import Logo from "./blocks/Logo";

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-block">
      <h2>Rechtliches</h2>
      <ul>
        <li><a href="/">Impressum</a></li>
        <li><a href="/">Datenschutz</a></li>
      </ul>
    </div>
    <div className="footer-block">
      <h2>Soziale Netzwerke</h2>
      <ul>
        <li><a href="/">Facebook</a></li>
        <li><a href="/">Instagram</a></li>
      </ul>
    </div>
    <div className="footer-block">
      <h2>Interne Links</h2>
      <ul>
        <li><a href="/">Account</a></li>
        <li><a href="/">Radio Infoseite</a></li>
      </ul>
    </div>
    <div className="footer-block">
      <h2>Partner</h2>
      <ul>
        <li><a href="/">Webradio-Design</a></li>
        <li><a href="/">Webradio-Hosting</a></li>
      </ul>
    </div>
    <Logo/>
  </footer>
  );
};

export default Footer;
