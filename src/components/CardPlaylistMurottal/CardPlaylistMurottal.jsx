import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionType from '../../Redux/globalActionType';

import './CardPlaylistMurottal.css';

class CardPlaylistMurottal extends Component {
  render() {
    const { playlist } = this.props;
    return (
      <div className="card-playlist-murottal">
        <h4>
          <i className="far fa-star"></i> Playlist Murottal
        </h4>
        <hr />

        {playlist.length === 0 && (
          <div className="board-playlist-murottal-empty">
            <p>Playlist Murottal Kosong</p>
          </div>
        )}

        {playlist.length === 1 && (
          <div className="board-playlist-murottal" name="PlaylistMurottal" onClick={(e) => this.props.handleSurah(e)}>
            <div className="total-murottal">{playlist.length}</div>
            <div className="text-playlist-murottal">
              <h4>Playlist saya</h4>
              <span>{playlist[0].name}</span>
            </div>
          </div>
        )}

        {playlist.length > 1 && (
          <div className="board-playlist-murottal" name="PlaylistMurottal" onClick={(e) => this.props.handleSurah(e)}>
            <div className="total-murottal">{playlist.length}</div>
            <div className="text-playlist-murottal">
              <h4>Playlist saya</h4>
              <span>
                {playlist[0].name} dan {playlist.length - 1} lainnya
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

export default connect(mapStateToProps, mapDispatchToProps)(CardPlaylistMurottal);
