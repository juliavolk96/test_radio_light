import React from "react";

const DJInfo = () => {
  return (
    <div className="dj-info">
      <div className="info-player-options">
        <div className="player-options">
          <form name="auswahlliste">
            <label>
              <select className="dropdownmenue" name="auswahllinks">
                <option value="" hidden>kbit/s FLAC</option>
                <option value="728">728 kbit/s FLAC</option>
                <option value="320">320 kbit/s MP3</option>
                <option value="192">192 kbit/s MP3</option>
                <option value="64">64 kbit/s AAC++</option>
              </select>
            </label>
          </form>
          <ul className="menu">
            <li className="menu-option"><a href="/"><img src="./images/music.png" alt="Option1" /></a></li>
            <li className="menu-option"><a href="/"><img src="./images/music.png" alt="Option2" /></a></li>
            <li className="menu-option"><a href="/"><img src="./images/music.png" alt="Option3" /></a></li>
            <li className="menu-option"><a href="/"><img src="./images/music.png" alt="Option4" /></a></li>
          </ul>
        </div>
      </div>
      <div className="track-info">
        <div className="track">
          <h3 className="artist">Artist: Track Artist</h3>
          <h4 className="track">Title: Track title</h4>
        </div>
      </div>
    </div>
  );
};

export default DJInfo;