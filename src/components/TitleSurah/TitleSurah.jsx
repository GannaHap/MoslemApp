import React, { Component } from 'react';

import './TitleSurah.css';

export default class TitleSurah extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className="title-surah">
        <div className="board-title-surah">
          <section>
            {data.name.transliteration.id} <span>({data.name.short})</span>
          </section>
          <div className="info">
            <div className="count-ayat">{data.numberOfVerses} Ayat</div>
            <div className="translation-surah">{data.name.translation.id} </div>
            <div className="revelation-surah">{data.revelation.id}</div>
          </div>
        </div>
      </div>
    );
  }
}
