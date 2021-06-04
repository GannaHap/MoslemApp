import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  // General
  blackWhite: '#000',
  blackBlueYoung: '#000',
  blackBlue: '#000',
  cardBoard: '#e7e7e7',

  // All
  body: '#fcfcfc',
  header: '#fefefe',
  boxShadowHeader: '0 1px 7px rgba(0, 0, 0, 0.2)',
  titleHeader: '#000',
  navigation: '#fefefe',
  btnNavigation: '#919191',

  // Quran
  listTitleSurah: '#000',
  lineCard: '#bbbaba',

  // SurahQuran
  // Title Surah //
  bgTitleSurah: '#f1f1f1',

  // Qari
  // Header Qari //
  headerQari: '#e9e9e9',

  // PlayMurottal
  borderBtn: '2px solid #107bdf',
  colorBtn: '#1077d8',
};

export const darkTheme = {
  // General
  blackWhite: '#fff',
  blackBlueYoung: '#dce8f5',
  blackBlue: '#0f8bff',
  cardBoard: '#1a202c',

  // All
  body: '#151a24',
  header: '#151a24',
  boxShadowHeader: '0 1px 7px rgba(0, 0, 0, 0.7)',
  titleHeader: '#fefefe',
  navigation: '#2d3748',
  btnNavigation: '#fefefe',

  // Quran
  listTitleSurah: '#ebebeb',
  lineCard: '#bbbaba',

  // SurahQuran
  // Title Surah //
  bgTitleSurah: '#212936',

  // Qari
  // Header Qari //
  headerQari: '#1e2433',

  // PlayMurottal
  // BtnControls //
  borderBtn: '2px solid #dce8f5',
  colorBtn: '#dce8f5',
};

export const GlobalStyles = createGlobalStyle`
// All  
  body {
    background-color: ${(props) => props.theme.body};
  }
  
  .header {
    background-color: ${(props) => props.theme.header};
    box-shadow: ${(props) => props.theme.boxShadowHeader};
  }
  
  .header h2 {
    color: ${(props) => props.theme.titleHeader};
  }
  
  .far.fa-ellipsis-v {
    color: ${(props) => props.theme.blackWhite}
  }
  
  .navigation {
    background-color: ${(props) => props.theme.navigation};
  }

  .btn-navigation {
    color: ${(props) => props.theme.btnNavigation};
  }

// Quran
  .surah-name h4 {
    color: ${(props) => props.theme.listTitleSurah};
  }


// SurahQuran
  // TitleSurah
    .title-surah {
      background-color: ${(props) => props.theme.bgTitleSurah};
    }

    .board-title-surah section {
      color: ${(props) => props.theme.blackBlueYoung};
    }

  // Bismillah
    .bismillah {
      color: ${(props) => props.theme.blackBlueYoung};
    }

  // Ayat 
    .section-top-ayat i {
      color: ${(props) => props.theme.blackWhite};
    }

    .section-mid-ayat p {
      color: ${(props) => props.theme.blackBlueYoung};
    }

    .section-bottom-ayat p {
      color: ${(props) => props.theme.blackBlueYoung};
    }

// Murottal
  // ListQari
  .card-text-qari h4 {
    color: ${(props) => props.theme.blackBlue};
  }

  .card-text-qari span {
    color: ${(props) => props.theme.blackBlueYoung};
  }

// Qari
  // HeaderQari
  .header-qari {
    background-color: ${(props) => props.theme.headerQari};
  }

  .text-header-qari p {
    color: ${(props) => props.theme.blackBlueYoung};
  }

  // Card Murottal
  .card-murottal span {
    color: ${(props) => props.theme.blackBlueYoung};
  }

// Play Murottal
  // BarPlayMurottal
  .text-bar-play-murottal h4 {
    color: ${(props) => props.theme.blackBlue};
  }

  .text-bar-play-murottal span {
    color: ${(props) => props.theme.blackBlueYoung};
  }

  // SliderMurottal
  .time-murottal span {
    color: ${(props) => props.theme.blackBlueYoung};
  }

  // ButtonControls
  .far.fa-repeat-alt,
  #backward,
  #forward,
  #addMurottal {
    color: ${(props) => props.theme.colorBtn};
    border: ${(props) => props.theme.borderBtn};
  }

  // Collection
  // CardLastRead & CardAyatFavorite & CardPlaylistMurottal
  .card-last-read h4,
  .card-ayat-favorite h4,
  .card-playlist-murottal h4 {
    color: ${(props) => props.theme.blackBlueYoung};
  }
  
  .text-last-read h4,
  .text-list-ayatFav h4,
  .text-playlist-murottal h4 {
    color: ${(props) => props.theme.blackBlue};
  }

  .text-last-read span,
  .text-list-ayatFav span,
  .text-playlist-murottal span {
    color: ${(props) => props.theme.blackBlueYoung};
  }

  // ListAyatFavorite 
  .list-ayat-favorite {
    background-color: ${(props) => props.theme.cardBoard};
  }

  .text-ayat,
  .text-translate {
    color: ${(props) => props.theme.blackBlueYoung};
  }

  // ListMurottal 
  .text-list-murottal span {
    color: ${(props) => props.theme.blackBlueYoung};
  }

// AboutUs
  .text-about-us p,
  .text-about-us ul,
  .text-about-us h5,
  .text-aboutUs-footer span {
    color: ${(props) => props.theme.blackBlueYoung};
  }
  
`;
