import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionType from '../../Redux/globalActionType';

import './ListQari.css';

class ListQari extends Component {
  render() {
    const { qari } = this.props;
    return (
      <div className="list-qari">
        {qari.map((card, index) => {
          const nameQari = card.name;
          return (
            <div className="card-qari" name="Qari" key={index} onClick={(e) => this.props.selectQari(e, nameQari)}>
              <img src={card.img} alt={card.name} />
              <div className="card-text-qari">
                <h4>{card.name}</h4>
                <span>{card.desc}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    qari: state.qari,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectQari: (e, card) => dispatch({ type: ActionType.SELECT_QARI, name: e.currentTarget.getAttribute('name'), qari: card }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListQari);
