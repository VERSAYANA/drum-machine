import React from 'react';
import './Pad.css';

const Pad = ({ keyText, audio, display, code }) => {
  const playAudio = () => {
    document.getElementById(keyText).play();
  };
  return (
    <div className="drum-pad" onClick={playAudio}>
      {keyText}
      <audio id={keyText}>
        <source src={audio} />
      </audio>
    </div>
  );
};

export default Pad;
