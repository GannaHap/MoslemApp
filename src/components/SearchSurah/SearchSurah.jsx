import React, { Component } from 'react';
import { connect } from 'react-redux';

import ActionType from '../../Redux/globalActionType';

import './SearchSurah.css';

class SearchSurah extends Component {
  render() {
    return (
      <div className="search-surah">
        <div className="board-search-surah">
          <i className="far fa-search"></i>
          <input type="text" className="input" placeholder="Cari Surah.." value={this.props.search} onChange={this.props.handleSearchSurah} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.searchSurah,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchSurah: (e) => dispatch({ type: ActionType.SEARCH_SURAH, keyword: e.target.value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchSurah);
