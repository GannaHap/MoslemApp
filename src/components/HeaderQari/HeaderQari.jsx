import React, { Component } from 'react';

import './HeaderQari.css';

export default class HeaderQari extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="header-qari">
        <img src={data.img} alt={data.name} />
        <div className="text-header-qari">
          <h4>{data.name}</h4>
          <p>{data.desc}</p>
        </div>
      </div>
    );
  }
}
