import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionType from '../../Redux/globalActionType';

import './ListMurottal.css';

class ListMurottal extends Component {
  handleMurottal = (event, dataLocal, id) => {
    event.stopPropagation();
    let rows = [];
    dataLocal.forEach((data) => {
      if (data.audio_url !== id) {
        rows.push(data);
      }
    });

    this.props.handleDataLocal(rows);
    localStorage.setItem('listMurottal', JSON.stringify(rows));
  };

  render() {
    const { data, index } = this.props;
    const dataLocal = JSON.parse(localStorage['listMurottal']);
    return (
      <div className="list-murottal" name="PlayMurottal" onClick={(e) => this.props.handleListMurottal(e, data, dataLocal, index)}>
        <div className="text-list-murottal">
          <h4>{data.name}</h4>
          <span>{data.qariName}</span>
        </div>
        <i className="far fa-ban" onClick={(e) => this.handleMurottal(e, dataLocal, data.audio_url)}></i>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleListMurottal: (e, data, dataLocal, index) =>
      dispatch({
        type: ActionType.SELECT_DISPLAY,
        name: e.currentTarget.getAttribute('name'),
        murottal: data,
        qariName: data.qariName,
        recitations: dataLocal,
        indexMurottal: index,
        imgQari: data.image,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMurottal);
