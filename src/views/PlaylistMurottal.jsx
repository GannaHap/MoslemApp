import React, { Component } from 'react';
import ListMurottal from '../components/ListMurottal/ListMurottal';
import TitlePlaylist from '../components/TitlePlaylist/TitlePlaylist';
import ButtonBack from '../components/ButtonBack/ButtonBack';

export default class PlaylistMurottal extends Component {
  state = {
    dataLocal: JSON.parse(localStorage['listMurottal']),
  };

  handleDataLocal = (data) => {
    this.setState({
      dataLocal: data,
    });
  };

  render() {
    const playList = this.state.dataLocal;
    return (
      <div className="playlist-murottal">
        <ButtonBack position="button-back-playlistMurottal" name="Collection" />
        <TitlePlaylist />
        <div className="container-playlist-murottal">
          {playList.map((list, index) => {
            return (
              <div key={index}>
                <ListMurottal data={list} index={index} handleDataLocal={this.handleDataLocal} />
              </div>
            );
          })}

          {playList.length === 0 && (
            <div className="board-playlist-murottal-empty">
              <p>Ayat Favorite Kosong</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
