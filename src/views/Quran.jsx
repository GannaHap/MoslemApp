import React, { Component } from 'react';
import ListSurah from '../components/ListSurah/ListSurah';
import SearchSurah from '../components/SearchSurah/SearchSurah';

export default class Quran extends Component {
  render() {
    window.addEventListener('load', () => {
      if (typeof (Storage !== undefined)) {
        if (localStorage.getItem('lastRead') === null) {
          localStorage.setItem('lastRead', JSON.stringify([]));
        }
        if (localStorage.getItem('ayatFavorite') === null) {
          localStorage.setItem('ayatFavorite', JSON.stringify([]));
        }
        if (localStorage.getItem('listMurottal') === null) {
          localStorage.setItem('listMurottal', JSON.stringify([]));
        }
        if (localStorage.getItem('themeMode') === null) {
          localStorage.setItem('themeMode', 'light');
        }
      } else {
        alert('Browser Anda tidak support Penyimpanan Local. Kami sarankan anda menggunakan Google Chrome');
      }
    });

    return (
      <div className="quran">
        <SearchSurah />
        <ListSurah />
      </div>
    );
  }
}
