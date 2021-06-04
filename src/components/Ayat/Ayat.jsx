import axios from 'axios';
import React, { Component } from 'react';

import './Ayat.css';

export default class Ayat extends Component {
  handleAyat = (event) => {
    event.stopPropagation();

    const ayat = event.target.parentElement;

    const ayats = document.querySelectorAll('.ayat .card-ayat');
    const sec = ayat.querySelector('.option-ayat');

    ayats.forEach((ayat) => {
      const optionAyat = ayat.querySelector('.section-top-ayat .option-ayat');
      optionAyat.classList.add('hide');
    });

    sec.classList.remove('hide');
  };

  // Adding Last Read
  addLastRead = (ver, data) => {
    const numberSurah = data.number;
    const numberAyat = ver.number.inSurah;

    axios({
      method: 'get',
      url: `https://api.quran.sutanlab.id/surah/${numberSurah}/${numberAyat}`,
    })
      .then((res) => {
        const data = res.data.data;
        const surahName = data.surah.name.transliteration.id;
        const juz = data.meta.juz;
        const numberSurah = data.surah.number;

        var lastRead = [{ surahName: surahName, numberSurah: numberSurah, numberAyat: numberAyat, juz: juz }];
        localStorage['lastRead'] = JSON.stringify(lastRead);
      })
      .catch((err) => console.log(err));

    const root = document.querySelector('#root');

    const alert = document.createElement('div');
    alert.classList.add('success-add-lastRead');
    alert.innerHTML = 'Berhasil ditandai';

    const alertElement = document.querySelector('.success-add-lastRead');
    if (alertElement) {
      alertElement.remove();
    }

    root.append(alert);
  };

  // Add Favorite Ayat
  addFavoriteAyat = (ver, data) => {
    const numberSurah = data.number;
    const numberAyat = ver.number.inSurah;

    axios({
      method: 'get',
      url: `https://api.quran.sutanlab.id/surah/${numberSurah}/${numberAyat}`,
    })
      .then((res) => {
        const data = res.data.data;
        const surahName = data.surah.name.transliteration.id;
        const numberAyat = data.number.inSurah;
        const audioAyat = data.audio.primary;
        const ayat = data.text.arab;
        const translateAyat = data.translation.id;
        const idAyat = data.number.inQuran;

        var ayatFavorite = {
          surahName: surahName,
          audioAyat: audioAyat,
          numberAyat: numberAyat,
          ayat: ayat,
          translateAyat: translateAyat,
          idAyat: idAyat,
        };

        const dataAyatFavorite = JSON.parse(localStorage.getItem('ayatFavorite'));

        let rows = [];
        let same = [];

        if (dataAyatFavorite.length === 0) {
          rows.push(ayatFavorite);
          same.push(idAyat);
        }

        if (dataAyatFavorite.length > 0) {
          dataAyatFavorite.forEach((row) => {
            rows.push(row);
            if (row.idAyat === idAyat) {
              same.push(idAyat);
            }
          });
        }

        if (same.length === 0) {
          rows.push(ayatFavorite);
        }

        localStorage.setItem('ayatFavorite', JSON.stringify(rows));
      })
      .catch((err) => console.log(err));

    const root = document.querySelector('#root');

    const alert = document.createElement('div');
    alert.classList.add('success-add-lastRead');
    alert.innerHTML = 'Berhasil difavoritkan';

    const alertElement = document.querySelector('.success-add-lastRead');
    if (alertElement) {
      alertElement.remove();
    }

    root.append(alert);
  };

  componentDidMount() {
    if (this.props.lastRead) {
      const ayat = this.props.lastRead;
      const ayatLastRead = document.getElementById(ayat);
      ayatLastRead.scrollIntoView(true);
      window.scrollBy(0, -170);
    }
  }

  render() {
    const { data } = this.props;
    const verses = data.verses;

    document.addEventListener('click', () => {
      const ayats = document.querySelectorAll('.ayat .card-ayat');
      ayats.forEach((ayat) => {
        const optionAyat = ayat.querySelector('.section-top-ayat .option-ayat');
        optionAyat.classList.add('hide');
      });
    });

    return (
      <div className="ayat">
        {verses &&
          verses.map((ver, index) => {
            const numberAyat = ver.number.inSurah;
            return (
              <div className="card-ayat" key={index} id={'ayat-' + numberAyat}>
                {/* Section Top */}
                <div className="section-top-ayat">
                  <div className="top-left-ayat">
                    <div className="ayat-number">{ver.number.inSurah}</div>
                    <div className="audio-board">
                      <audio src={ver.audio.primary} className="audio" id="audio" type="audio/mpeg" controlsList="nodownload" controls="controls" preload="none" />
                    </div>
                  </div>
                  <i className="fal fa-ellipsis-v" onClick={(event) => this.handleAyat(event)}></i>
                  <div className="option-ayat hide">
                    <span onClick={() => this.addFavoriteAyat(ver, data)}>Tambahkan Favorite</span>
                    <span onClick={() => this.addLastRead(ver, data)}>Tandai terakhir dibaca</span>
                  </div>
                </div>
                {/* Section Middle */}
                <div className="section-mid-ayat">
                  <p>{ver.text.arab}</p>
                </div>
                {/* Section Bottom */}
                <div className="section-bottom-ayat">
                  <p>{ver.translation.id}</p>
                </div>
                <hr />
              </div>
            );
          })}
      </div>
    );
  }
}
