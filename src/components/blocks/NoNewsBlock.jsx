import React from "react";
import './css/NoNewsBlock.css'

const NoNewsBlock = () => {
  return(
    <div className="no-news-container">
      <h2>Нет новостей</h2>
      <p>На данный момент новостей нет. Пожалуйста, проверьте позже.</p>
    </div>
  );
}

export default NoNewsBlock;