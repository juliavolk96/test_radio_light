import React from "react";
import './css/Authorization.css'

const Authorization = () => {
  return(
    <div className="authorization-container">
      <h2>
        <span>L</span>
        <span>o</span>
        <span>g</span>
        <span>i</span>
        <span>n</span>
      </h2>
      <form className="login-form">
        <label>
          <input type="text" placeholder="Имя пользователя" />
        </label>
        <label>
          <input type="password" placeholder="Пароль" />
        </label>
        <button type="submit" className="btn">Войти</button>
      </form>
    </div>
  );
}

export default Authorization;
