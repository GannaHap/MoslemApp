import React, { Component } from 'react';
import ListQari from '../components/ListQari/ListQari';
import TitleListQari from '../components/TitleListQari/TitleListQari';

export default class Murottal extends Component {
  render() {
    return (
      <div className="murottal">
        <TitleListQari />
        <ListQari />
      </div>
    );
  }
}
