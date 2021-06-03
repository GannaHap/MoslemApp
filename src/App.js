import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './Theme/themes.js';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import AyatFavorites from './views/AyatFavorites';
import Collection from './views/Collection';
import Murottal from './views/Murottal';
import PlaylistMurottal from './views/PlaylistMurottal';
import PlayMurottal from './views/PlayMurottal';
import Qari from './views/Qari';
import Quran from './views/Quran';
import SurahQuran from './views/SurahQuran';

const StyledApp = styled.div``;

const switchDisplay = (display) => {
  switch (display) {
    case 'Dashboard':
      return <Quran />;
    case 'SurahQuran':
      return <SurahQuran />;
    case 'Collection':
      return <Collection />;
    case 'AyatFavorites':
      return <AyatFavorites />;
    case 'Murottal':
      return <Murottal />;
    case 'Qari':
      return <Qari />;
    case 'PlayMurottal':
      return <PlayMurottal />;
    case 'PlaylistMurottal':
      return <PlaylistMurottal />;

    default:
      return <div>Halaman tidak ditemukan</div>;
  }
};

const App = (props) => {
  const display = props.display;
  const textTheme = localStorage.getItem('themeMode');
  const [theme, setTheme] = useState(textTheme);

  const themeToggler = () => {
    if (theme === 'light') {
      localStorage.setItem('themeMode', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('themeMode', 'light');
      setTheme('light');
    }
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div>
        <GlobalStyles />
        <StyledApp>
          <Header themeToggler={themeToggler} />
          {switchDisplay(display)}
          <Navigation />
        </StyledApp>
      </div>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    display: state.display,
  };
};

export default connect(mapStateToProps)(App);
