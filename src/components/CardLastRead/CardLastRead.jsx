import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionType from '../../Redux/globalActionType';

import './CardLastRead.css';

class CardLastRead extends Component {
  render() {
    let lastRead = this.props.lastRead;

    return (
      <div className="card-last-read">
        <h4>
          <i className="fal fa-paperclip"></i> Terakhir dibaca
        </h4>
        <hr />
        {lastRead.length === 0 && (
          <div className="board-last-read-empty">
            <p>Anda belum pernah menandai surah yang terakhir dibaca</p>
          </div>
        )}

        {lastRead.length > 0 && (
          <div className="board-last-read" name="SurahQuran" onClick={(e) => this.props.handleSurah(e, lastRead[0].numberSurah, lastRead[0].numberAyat)}>
            <div className="number-juz">Juz {lastRead[0].juz}</div>
            <div className="text-last-read">
              <h4>{lastRead[0].surahName}</h4>
              <span>Ayat {lastRead[0].numberAyat}</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataQuran: state.dataQuran,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSurah: (e, surah, lastReadAyat) => dispatch({ type: ActionType.SELECT_DISPLAY, name: e.currentTarget.getAttribute('name'), numberSurah: surah, lastRead: `ayat-${lastReadAyat}` }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardLastRead);
