import React, { Component } from 'react';
import './Pad.css';

class Pad extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.state = {
      pressed: false,
    };
  }
  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }
  // componentDidUpdate(nextProps, nextState) {
  //   if (nextState.pressed === true) {
  //     this.setState({
  //       pressed: false,
  //     });
  //   }
  // }
  handleKeyPress(e) {
    if (this.props.code === e.keyCode) {
      this.playAudio();
    }
  }
  playAudio() {
    this.setState({
      pressed: true,
    });
    setTimeout(() => {
      this.setState({
        pressed: false,
      });
    }, 100);
    this.props.playAudio(this.props.keyText, this.props.display);
  }
  render() {
    return (
      <div
        className={this.state.pressed ? 'drum-pad pressed' : 'drum-pad '}
        onClick={this.playAudio}
      >
        {this.props.keyText}
        <audio id={this.props.keyText}>
          <source src={this.props.audio} />
        </audio>
      </div>
    );
  }
}

export default Pad;
