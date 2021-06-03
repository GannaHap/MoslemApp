import React, { Component } from 'react';

import './ButtonMode.css';

export default class ButtonMode extends Component {
  handleButonMode = () => {
    this.props.themeToggler();
  };

  render() {
    const btnMode = localStorage.getItem('themeMode');
    return (
      <div className="button-mode">
        <label className="switch">
          <input type="checkbox" checked={btnMode === 'dark' ? true : false} onChange={() => this.handleButonMode()} />
          <span className="slider round"></span>
        </label>
      </div>
    );
  }
}
