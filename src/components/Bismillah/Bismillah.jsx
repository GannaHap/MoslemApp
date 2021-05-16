import React, { Component } from 'react';

import './Bismillah.css';

export default class Bismillah extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        {this.props.data.preBismillah && (
          <div className="bismillah">
            <h2>{data.preBismillah.text.arab}</h2>
            <p>{data.preBismillah.translation.id}</p>
          </div>
        )}
      </div>
    );
  }
}
