import React, { Component } from 'react';

import './ButtonControls.css';

export default class ButtonControls extends Component {
  state = {
    play: 'far fa-play',
    addMurottal: 'far fa-plus',
  };

  handlePlay = () => {
    if (this.state.play === 'far fa-play') {
      this.setState({
        play: 'far fa-pause',
      });
    } else {
      this.setState({
        play: 'far fa-play',
      });
    }
  };

  handleAddMurottal = () => {
    if (this.state.addMurottal === 'far fa-plus') {
      this.setState({
        addMurottal: 'far fa-check',
      });
    } else {
      this.setState({
        addMurottal: 'far fa-plus',
      });
    }
  };

  render() {
    return (
      <div className="button-controls">
        {/* Part Repeat */}
        <div className="part-repeat">
          <i id="repeat" className="far fa-repeat-alt"></i>
        </div>

        {/* Part Middle */}
        <div className="control-murottal-middle">
          {/* Backward */}
          <i id="backward" className="far fa-step-backward"></i>

          {/* Play */}
          <i id="play" className={this.state.play} onClick={() => this.handlePlay()}></i>

          {/* Forward */}
          <i id="forward" className="far fa-step-forward"></i>
        </div>

        <div className="part-add-murottal">
          <i id="addMurottal" className={this.state.addMurottal} onClick={() => this.handleAddMurottal()}></i>
        </div>
      </div>
    );
  }
}
