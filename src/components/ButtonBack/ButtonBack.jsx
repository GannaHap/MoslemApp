import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionType from '../../Redux/globalActionType';

import './ButtonBack.css';

class ButtonBack extends Component {
  render() {
    const { position, name } = this.props;
    return (
      <div className={position}>
        <i className="far fa-arrow-circle-left" onClick={() => this.props.handleDisplay(name)}>
          <span>Kembali</span>
        </i>
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
    handleDisplay: (name) => dispatch({ type: ActionType.SELECT_DISPLAY, name: name }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonBack);
