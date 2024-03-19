import React, { useState } from "react";
import './css/AudioPlayer.css'

const AudioPlayer = ({ src }) => {
  const [audio] = useState(new Audio(src));
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    audio.play();
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    audio.pause();
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
    setIsPlaying(!isPlaying);
  };

  const increaseVolume = () => {
    if (audio.volume <= 0.7) {
      audio.volume += 0.3;
    } else {
      audio.volume = 1.0;
    }
  };
  
  const decreaseVolume = () => {
    if (audio.volume >= 0.3) {
      audio.volume -= 0.3;
    } else {
      audio.volume = 0.0;
    }
  }; 

  return (
    <div className="audio-player">
      <button onClick={decreaseVolume}>-</button>
      <button onClick={togglePlayPause}>
        {isPlaying ? "\u2759\u2759" : "\u25B6"}
      </button>
      <button onClick={increaseVolume}>+</button>
    </div>
  );
};

export default AudioPlayer;