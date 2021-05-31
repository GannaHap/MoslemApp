import React, { Component } from 'react';

import './ThumbPlayMurottal.css';

export default class ThumbPlayMurottal extends Component {
  render() {
    const { image, qariName } = this.props;
    return (
      <div className="thumb-play-murottal">
        <img src={image} alt={qariName} />
      </div>
    );
  }
}
