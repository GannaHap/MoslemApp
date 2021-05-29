import React, { Component } from 'react';

import './ListAyatFavorite.css';

export default class ListAyatFavorite extends Component {
  handleAyat = (dataLocal, id) => {
    let rows = [];
    dataLocal.forEach((data) => {
      if (data.idAyat !== id) {
        rows.push(data);
      }
    });
    this.props.handleDataLocal(rows);
    localStorage.setItem('ayatFavorite', JSON.stringify(rows));
  };

  render() {
    const dataLocal = JSON.parse(localStorage['ayatFavorite']);
    const { data } = this.props;

    return (
      <div className="list-ayat-favorite">
        <div className="section-top-ayatFav">
          <div className="wrap-top-ayatFav">
            <div className="title-list">
              <span>{data.surahName} : </span>
              <span>Ayat {data.numberAyat}</span>
            </div>
            <div className="audio-board">
              <audio src={data.audioAyat} className="audio" id="audio" type="audio/mpeg" controlsList="nodownload" controls="controls" preload="none" />
            </div>
          </div>
          <i className="far fa-ban" onClick={() => this.handleAyat(dataLocal, data.idAyat)}></i>
        </div>
        <p className="text-ayat">{data.ayat}</p>
        <p className="text-translate">{data.translateAyat}</p>
      </div>
    );
  }
}
