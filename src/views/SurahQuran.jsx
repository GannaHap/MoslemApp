import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Ayat from '../components/Ayat/Ayat';
import Bismillah from '../components/Bismillah/Bismillah';
import SurahQuranSK from '../components/SkeletonsComp/SurahQuranSK/SurahQuranSK';
import TitleSurah from '../components/TitleSurah/TitleSurah';

class SurahQuran extends Component {
  state = {
    data: null,
  };

  getSurah() {
    let indexSurah = this.props.surah;

    axios({
      method: 'get',
      url: `https://api.quran.sutanlab.id/surah/${indexSurah}`,
    }).then((res) => {
      const data = res.data.data;
      this.setState({
        data: data,
      });
    });
  }

  componentDidMount() {
    this.getSurah();
  }

  render() {
    return (
      <div className="surah-quran">
        {this.state.data ? (
          <div>
            <TitleSurah data={this.state.data} />
            <Bismillah data={this.state.data} />
            <Ayat data={this.state.data} lastRead={this.props.lastRead} />
          </div>
        ) : (
          <SurahQuranSK />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  if (state.scrollToAyat) {
    return {
      surah: state.surah,
      lastRead: state.scrollToAyat,
    };
  }

  return {
    surah: state.surah,
  };
};

export default connect(mapStateToProps)(SurahQuran);
