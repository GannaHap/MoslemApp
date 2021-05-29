import React, { Component } from 'react';
import CardAyatFavorite from '../components/CardAyatFavorite/CardAyatFavorite';
import CardLastRead from '../components/CardLastRead/CardLastRead';

export default class Collection extends Component {
  render() {
    const lastRead = JSON.parse(localStorage['lastRead']);
    const listAyatFavorite = JSON.parse(localStorage['ayatFavorite']);

    return (
      <div className="collection">
        <CardLastRead lastRead={lastRead} />
        <CardAyatFavorite ayatFavorite={listAyatFavorite} />
      </div>
    );
  }
}
