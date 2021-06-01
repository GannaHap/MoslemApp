import React, { Component } from 'react';

import './SliderMurottal.css';

export default class SliderMurottal extends Component {
  durationControl = (event) => {
    const slider = event.currentTarget;
    this.props.handleDuration(slider);
  };

  render() {
    const { valueDuration } = this.props;
    return (
      <div className="slider-murottal">
        <div className="time-murottal">
          <span>--:--</span>
          <span>--:--</span>
        </div>
        <div className="section-slider-bottom">
          <input type="range" className="range-murottal" value={valueDuration} onChange={(event) => this.durationControl(event)} />
        </div>
      </div>
    );
  }
}
