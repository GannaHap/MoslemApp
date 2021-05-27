import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionType from '../../Redux/globalActionType';

import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <button name="Dashboard" className="btn-navigation active" onClick={(e) => this.props.handleNavigation(e)}>
          <i className="far fa-quran"></i>
          <span>Al-Quran</span>
        </button>
        <button name="Murottal" className="btn-navigation" onClick={(e) => this.props.handleNavigation(e)}>
          <i className="far fa-music"></i>
          <span>Murottal</span>
        </button>
        <button name="Collection" className="btn-navigation" onClick={(e) => this.props.handleNavigation(e)}>
          <i className="far fa-list-ul"></i>
          <span>Koleksi</span>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleNavigation: (e) => dispatch({ type: ActionType.SELECT_DISPLAY, name: e.currentTarget.getAttribute('name'), event: e }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
