import React, { Component } from 'react';

import './SliderMurottal.css';

export default class SliderMurottal extends Component {
  render() {
    return (
      <div className="slider-murottal">
        <div className="time-murottal">
          <span>--:--</span>
          <span>--:--</span>
        </div>
        <div className="section-slider-bottom">
          <input type="range" className="range-murottal" />
        </div>
      </div>
    );
  }
}
