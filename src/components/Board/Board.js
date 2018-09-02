import React, { Component } from 'react';
import './Board.css';
import Pad from '../Pad/Pad';
import pads from '../../pads';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
    };
    this.playAudio = this.playAudio.bind(this);
  }
  playAudio(id, display) {
    document.getElementById(id).play();
    this.setState({
      display: display,
    });
  }
  render() {
    return (
      <div id="drum-machine">
        <div id="panel">
          <span id="display">{this.state.display}</span>
        </div>
        <div id="pad">
          {pads.map((pad, index) => (
            <Pad
              key={index}
              audio={pad.audio}
              keyText={pad.key}
              code={pad.code}
              display={pad.display}
              playAudio={this.playAudio}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Board;
