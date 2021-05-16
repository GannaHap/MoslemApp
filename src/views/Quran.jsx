import React, { Component } from 'react';
import ListSurah from '../components/ListSurah/ListSurah';
import SearchSurah from '../components/SearchSurah/SearchSurah';

export default class Quran extends Component {
  render() {
    return (
      <div className="quran">
        <SearchSurah />
        <ListSurah />
      </div>
    );
  }
}
