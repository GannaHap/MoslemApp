import React, { Component } from 'react';
import ButtonMode from '../ButtonMode/ButtonMode';
import OptionApps from '../OptionApps/OptionApps';

import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h2>MoslemApps</h2>
        <div className="section-btn-header">
          <ButtonMode themeToggler={this.props.themeToggler} />
          <OptionApps />
        </div>
      </div>
    );
  }
}
