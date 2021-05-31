import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardMurottal from '../components/CardMurottal/CardMurottal';
import HeaderQari from '../components/HeaderQari/HeaderQari';

class Qari extends Component {
  render() {
    const { dataQari, qari } = this.props;
    let rows = null;
    dataQari.forEach((data) => {
      if (data.name === qari) {
        rows = data;
      }
    });

    return (
      <div className="qari">
        <HeaderQari data={rows} />
        <CardMurottal recitations={rows} qariName={qari} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataQari: state.qari,
    qari: state.qariName,
  };
};

export default connect(mapStateToProps)(Qari);
