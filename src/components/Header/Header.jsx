import React, { Component } from 'react';
import ButtonMode from '../ButtonMode/ButtonMode';

import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h2>MoslemApps</h2>
        <ButtonMode themeToggler={this.props.themeToggler} />
      </div>
    );
  }
}
