import React from "react";
import './css/Logo.css'

const Logo = () => {
  return (
    <div className="logo-block">
      <h2>Design</h2>
      <a href="/">
        <img src="./images/logo.png" alt="logo" />
      </a>
    </div>
  );
}

export default Logo;