import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import ActionType from '../../Redux/globalActionType';

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

  addLastRead = (ver, data) => {
    const numberSurah = data.number;
    const numberAyat = ver.number.inSurah;

    var lastRead = [{ numberSurah: numberSurah, numberAyat: numberAyat }];
    localStorage['lastRead'] = JSON.stringify(lastRead);

    // console.log(numberSurah);
    // console.log(numberAyat);
    // const arr = JSON.parse(localStorage['lastRead'])[0];
    // console.log(arr.numberAyat);
  };

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
            return (
              <div className="card-ayat" key={index}>
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
                    <span>Tambahkan Favorite</span>
                    <span onClick={() => this.addLastRead(ver, data)}>Terakhir dibaca</span>
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

// const mapStateToProps = (state) => {
//   return state;
// };

// const mapDispacthToProps = (dispacth) => {
//   return {
//     handleAyat: (e) => dispacth({ type: ActionType.HANDLE_AYAT }),
//   };
// };

// export default connect(mapStateToProps, mapDispacthToProps)(Ayat);
