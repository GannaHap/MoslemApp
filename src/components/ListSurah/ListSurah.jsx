import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionType from '../../Redux/globalActionType';
import EmptySurah from '../EmptySurah/EmptySurah';

import './ListSurah.css';

class ListSurah extends Component {
  render() {
    window.scrollBy(0, 0);

    return (
      <div className="list-surah">
        {this.props.dataQuran &&
          this.props.dataQuran.map((bar, index) => {
            return (
              <div className="bar-surah" name="SurahQuran" key={index} onClick={(e) => this.props.handleSurah(e, bar)}>
                <div className="surah-name">
                  <h4>{bar.name.transliteration.id}</h4>
                  <span>{bar.numberOfVerses} ayat</span>
                </div>
              </div>
            );
          })}

        {this.props.dataQuran.length === 0 && <EmptySurah />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSurah: (e, surah) => dispatch({ type: ActionType.SELECT_DISPLAY, name: e.currentTarget.getAttribute('name'), surah: surah.number }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListSurah);
