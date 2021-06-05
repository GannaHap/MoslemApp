import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionType from '../../Redux/globalActionType';

import './CardMurottal.css';

class CardMurottal extends Component {
  render() {
    const { qariName, allRecitations, fullRecitations } = this.props;
    const dataRecitations = this.props.dataQari;
    const imgQari = dataRecitations.img;

    return (
      <div className="board-murottal">
        {allRecitations.map((rec, index) => {
          return (
            <div className="card-murottal" name="PlayMurottal" key={index} onClick={(e) => this.props.handleMurottal(e, rec, imgQari, fullRecitations, index)}>
              <h4>{rec.name}</h4>
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
    handleMurottal: (e, murottal, imgQari, recitations, index) =>
      dispatch({
        type: ActionType.SELECT_DISPLAY,
        name: e.currentTarget.getAttribute('name'),
        murottal: murottal,
        imgQari: imgQari,
        recitations: recitations,
        indexMurottal: index,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardMurottal);
