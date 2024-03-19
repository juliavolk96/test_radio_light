import React from "react";
import './css/NewsBlock.css'

const NewsBlock = () => {
  return(
    <div className="news-container">
      <div className="news-block">
        <h3 className="news-subtitle">Подзаголовок новости</h3>
        <img className="news-image" src="./images/news.jpg" alt="описание изображения"/>
        <p className="news-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae reiciendis laboriosam doloribus reprehenderit excepturi blanditiis fugit necessitatibus dolorum? Veritatis vitae assumenda soluta earum molestiae eius modi voluptas eum ullam laborum.</p>
      </div>
      <div className="news-block">
        <h3 className="news-subtitle">Подзаголовок новости</h3>
        <img className="news-image" src="./images/news1.jpg" alt="описание изображения"/>
        <p className="news-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae reiciendis laboriosam doloribus reprehenderit excepturi blanditiis fugit necessitatibus dolorum? Veritatis vitae assumenda soluta earum molestiae eius modi voluptas eum ullam laborum.</p>
      </div>
    </div>
  );
}

export default NewsBlock;