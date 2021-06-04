import React, { Component } from 'react';
import TextAboutUs from '../components/TextAboutUs/TextAboutUs';
import TitleAboutUs from '../components/TitleAboutUs/TitleAboutUs';

export default class AboutUs extends Component {
  render() {
    return (
      <div className="about-us">
        <TitleAboutUs />
        <TextAboutUs />
      </div>
    );
  }
}
