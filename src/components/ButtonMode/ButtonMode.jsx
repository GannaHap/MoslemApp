import React, { Component } from 'react';

import './ButtonMode.css';

export default class ButtonMode extends Component {
  render() {
    return (
      <div className="button-mode">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    );
  }
}
