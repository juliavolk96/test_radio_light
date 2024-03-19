import React from "react";
import Authorization from "./blocks/Authorization";
import Player from "./blocks/player/Player";
import './css/RightColumn.css'

const RightColumn = () => {
  return(
    <div className="right-column-content">
      <div className="blocks-container right-block">
        <Authorization/>
        <Player/>
      </div>
    </div>
  );
}

export default RightColumn;