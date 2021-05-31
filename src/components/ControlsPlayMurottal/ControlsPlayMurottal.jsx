import React, { Component } from 'react';
import ButtonControls from '../ButtonControls/ButtonControls';
import SliderMurottal from '../SliderMurottal/SliderMurottal';

import './ControlsPlayMurottal.css';

export default class ControlsPlayMurottal extends Component {
  render() {
    return (
      <div className="controls-play-murottal">
        <SliderMurottal />
        <ButtonControls />
      </div>
    );
  }
}
