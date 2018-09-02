import React, { Component } from 'react';
import Pad from './Pad';

class Board extends Component {
  render() {
    return (
      <div id="drum-machine">
        <Pad k="Q" />
        <Pad k="W" />
        <Pad k="E" />
        <Pad k="A" />
        <Pad k="S" />
        <Pad k="D" />
        <Pad k="Z" />
        <Pad k="X" />
        <Pad k="C" />
      </div>
    );
  }
}

export default Board;
