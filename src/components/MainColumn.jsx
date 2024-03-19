import React from "react";
import NoNewsBlock from "./blocks/NoNewsBlock";
import Title from "./blocks/Title";
import NewsBlock from "./blocks/NewsBlock";
import './css/MainColumn.css'

const MainColumn = () => {
  return(
    <div className="main-column-content">
      <div className="main-shadow animation-border">
        <Title/>
        <NoNewsBlock/>
        <NewsBlock/>
      </div>
    </div>
  );
}

export default MainColumn;