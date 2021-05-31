import React, { Component } from 'react';

import './BarPlayMurottal.css';

export default class BarPlayMurottal extends Component {
  render() {
    const { surahName, qariName } = this.props;
    return (
      <div className="bar-play-murottal">
        <div className="text-bar-play-murottal">
          <h4>{surahName}</h4>
          <span>{qariName}</span>
        </div>
      </div>
    );
  }
}
