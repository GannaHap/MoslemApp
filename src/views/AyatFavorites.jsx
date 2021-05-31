import React, { Component } from 'react';
import ListAyatFavorite from '../components/ListAyatFavorite/ListAyatFavorite';
import TitleAyatFavorites from '../components/TitleAyatFavorites/TitleAyatFavorites';

export default class AyatFavorites extends Component {
  state = {
    dataLocal: JSON.parse(localStorage['ayatFavorite']),
  };

  handleDataLocal = (data) => {
    this.setState({
      dataLocal: data,
    });
  };

  render() {
    const listAyatFavorite = this.state.dataLocal;
    return (
      <div className="ayat-favorites">
        <TitleAyatFavorites />
        <div className="container-list-ayatFav">
          {listAyatFavorite.map((list, index) => {
            return (
              <div key={index}>
                <ListAyatFavorite data={list} dataLocal={listAyatFavorite} handleDataLocal={this.handleDataLocal} />
              </div>
            );
          })}
          {listAyatFavorite.length === 0 && (
            <div className="board-list-ayatFav-empty">
              <p>Ayat Favorite Kosong</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
