import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionType from '../../Redux/globalActionType';

import './CardAyatFavorite.css';

class CardAyatFavorite extends Component {
  render() {
    const listAyatFavorite = this.props.ayatFavorite;
    return (
      <div className="card-ayat-favorite">
        <h4>
          <i className="far fa-star"></i> Ayat Favorite
        </h4>
        <hr />

        {listAyatFavorite.length === 0 && (
          <div className="board-list-ayatFav-empty">
            <p>Ayat Favorite Kosong</p>
          </div>
        )}

        {listAyatFavorite.length === 1 && (
          <div className="board-list-ayatFav" name="AyatFavorites" onClick={(e) => this.props.handleSurah(e)}>
            <div className="total-ayat">{listAyatFavorite.length}</div>
            <div className="text-list-ayatFav">
              <h4>Kumpulan Ayat</h4>
              <span>
                {listAyatFavorite[0].surahName} ayat {listAyatFavorite[0].numberAyat}
              </span>
            </div>
          </div>
        )}

        {listAyatFavorite.length > 1 && (
          <div className="board-list-ayatFav" name="AyatFavorites" onClick={(e) => this.props.handleSurah(e)}>
            <div className="total-ayat">{listAyatFavorite.length}</div>
            <div className="text-list-ayatFav">
              <h4>Kumpulan Ayat</h4>
              <span>
                {listAyatFavorite[0].surahName} ayat {listAyatFavorite[0].numberAyat} dan {listAyatFavorite.length - 1} ayat lainnya
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSurah: (e) => dispatch({ type: ActionType.SELECT_DISPLAY, name: e.currentTarget.getAttribute('name') }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardAyatFavorite);
