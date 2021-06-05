import React, { Component } from 'react';
import { connect } from 'react-redux';
import ButtonBack from '../components/ButtonBack/ButtonBack';
import CardMurottal from '../components/CardMurottal/CardMurottal';
import HeaderQari from '../components/HeaderQari/HeaderQari';
import SearchMurrotal from '../components/SearchMurottal/SearchMurottal';

class Qari extends Component {
  state = {
    keyword: '',
  };

  handleSearchMurottal = (event) => {
    this.setState({
      keyword: event.target.value,
    });
  };

  render() {
    const { dataQari, qari, recitations } = this.props;
    let datas = null;
    dataQari.forEach((data) => {
      if (data.name === qari) {
        datas = data;
      }
    });

    // SearchMurottal
    const keyword = this.state.keyword;
    let allRecitations = recitations;
    if (keyword !== '') {
      let rows = [];
      recitations.forEach((recitation) => {
        let recitationName = recitation.name;
        if (recitationName.toLowerCase().indexOf(keyword.toLowerCase()) >= 0) {
          rows.push(recitation);
        }
      });

      allRecitations = rows;
    }

    return (
      <div className="qari">
        <HeaderQari data={datas} />
        <ButtonBack position="button-back-qari" name="Murottal" />
        <SearchMurrotal keyword={this.state.keyword} handleSearchMurottal={this.handleSearchMurottal} />
        <CardMurottal dataQari={datas} qariName={qari} allRecitations={allRecitations} fullRecitations={recitations} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataQari: state.qari,
    qari: state.qariName,
    recitations: state.recitations,
  };
};

export default connect(mapStateToProps)(Qari);
