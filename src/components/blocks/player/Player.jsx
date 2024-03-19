import React from "react";
import './style.css'
import DJInfo from "./DjInfo";
import AudioPlayer from "../AudioPlayer";

const Player = () => {
  return (
    <div className="player">
      <div className="player-container">
      <h2>
          <span>P</span>
          <span>l</span>
          <span>a</span>
          <span>y</span>
          <span>e</span>
          <span>r</span>
        </h2>
        <div className="player-info">
          <img src="./images/disk.png" className="player-image" alt="" />
          <DJInfo />
          <AudioPlayer src={"/music/.mp3"}/>
        </div>
      </div>
    </div>
  );
};

export default Player;