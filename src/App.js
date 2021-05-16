import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Quran from './views/Quran';
import SurahQuran from './views/SurahQuran';

class App extends Component {
  render() {
    const switchDisplay = () => {
      switch (this.props.display) {
        case 'Dashboard':
          return <Quran />;
        case 'SurahQuran':
          return <SurahQuran />;
        default:
          return <div>Halaman tidak ditemukan</div>;
      }
    };
    return (
      <div>
        <Header />
        {switchDisplay()}
        <Navigation />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    display: state.display,
  };
};

export default connect(mapStateToProps)(App);
