import React, { Component } from 'react';
import './Board.css';
import Pad from '../Pad/Pad';
import pads from '../../pads';

class Board extends Component {
  render() {
    return (
      <div id="drum-machine">
        <div id="pad">
          {pads.map((pad) => (
            <Pad
              audio={pad.audio}
              keyText={pad.key}
              code={pad.code}
              display={pad.display}
            />
          ))}
          {/* <Pad
            audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            k="Q"
          />
          <Pad k="W" />
          <Pad k="E" />
          <Pad k="A" />
          <Pad k="S" />
          <Pad k="D" />
          <Pad k="Z" />
          <Pad k="X" />
          <Pad k="C" /> */}
        </div>
      </div>
    );
  }
}

export default Board;
