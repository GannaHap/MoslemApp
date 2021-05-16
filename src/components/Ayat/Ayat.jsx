import React, { Component } from 'react';

import './Ayat.css';

export default class Ayat extends Component {
  state = {
    showOption: false,
  };

  handleAyat = () => {
    this.setState({
      showOption: !this.state.showOption,
    });
  };

  render() {
    const { data } = this.props;
    const verses = data.verses;
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
                  <i className="fal fa-ellipsis-v" onClick={() => this.handleAyat()}></i>
                  {this.state.showOption && (
                    <div className="option-ayat">
                      <span>Tambahkan Favorite</span>
                      <span>Terakhir dibaca</span>
                    </div>
                  )}
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
