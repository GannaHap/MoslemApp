import React, { Component } from 'react';

import './ButtonControls.css';

export default class ButtonControls extends Component {
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

          {/* Undo */}
          <div id="undo5s">
            <i className="far fa-undo-alt"></i>
            <span>5s</span>
          </div>

          {/* Play */}
          <i id="play" className="far fa-play"></i>

          {/* Redo */}
          <div id="redo5s">
            <span>5s</span>
            <i className="far fa-redo-alt"></i>
          </div>

          {/* Forward */}
          <i id="forward" className="far fa-step-forward"></i>
        </div>

        {/* Control Volume */}
        <div className="control-volume">
          <i id="volume" className="far fa-volume-up"></i>
          <i className="fas fa-caret-up active"></i>
          <div className="bar-volume">
            <input type="range" className="slider-volume" />
            <span>100</span>
          </div>
        </div>
      </div>
    );
  }
}
