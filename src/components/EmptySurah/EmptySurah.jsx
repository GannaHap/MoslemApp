import React, { Component } from 'react';

import './EmptySurah.css';

export default class EmptySurah extends Component {
  render() {
    return (
      <div className="empty-surah">
        <img src="/assets/empty-surah.png" alt="Empty Surah" />
      </div>
    );
  }
}
