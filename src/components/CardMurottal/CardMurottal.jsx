import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionType from '../../Redux/globalActionType';

import './CardMurottal.css';

class CardMurottal extends Component {
  render() {
    const { qariName } = this.props;
    const dataRecitations = this.props.recitations;
    const recitations = dataRecitations.recitations;

    const imgQari = dataRecitations.img;
    return (
      <div className="board-murottal">
        {recitations.map((rec, index) => {
          return (
            <div className="card-murottal" name="PlayMurottal" key={index} onClick={(e) => this.props.handleMurottal(e, rec, imgQari)}>
              <h4>{rec.id}</h4>
              <span>{qariName}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleMurottal: (e, recitations, imgQari) => dispatch({ type: ActionType.SELECT_DISPLAY, name: e.currentTarget.getAttribute('name'), recitations: recitations, imgQari: imgQari }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardMurottal);
