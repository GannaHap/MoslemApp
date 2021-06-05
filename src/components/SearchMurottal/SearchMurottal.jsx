import React, { Component } from 'react';

export default class SearchMurottal extends Component {
  render() {
    return (
      <div className="search-surah">
        <div className="board-search-surah">
          <i className="far fa-search"></i>
          <input type="text" className="input" placeholder="Cari Surah.." value={this.props.keyword} onChange={(e) => this.props.handleSearchMurottal(e)} />
        </div>
      </div>
    );
  }
}
