import ActionType from './globalActionType';
import API from '../assets/data.json';
import dataQari from '../assets/dataQari.json';

const globalState = {
  api: API.data,
  dataQuran: API.data,
  qari: dataQari.qari,
  searchSurah: '',
  display: 'Dashboard',
  surah: null,
  scrollToAyat: null,
  qariName: '',
  imgQari: null,
  playingMurottal: null,
};

const rootReducer = (state = globalState, action) => {
  // SEARCH_SURAH
  if (action.type === ActionType.SEARCH_SURAH) {
    const { api } = state;
    const { keyword } = action;
    let rows = [];

    if (keyword !== '') {
      api.forEach((surah) => {
        let surahName = surah.name.transliteration.id;
        if (surahName.toLowerCase().indexOf(keyword.toLowerCase()) >= 0) {
          rows.push(surah);
        }
      });

      return {
        ...state,
        dataQuran: rows,
        searchSurah: action.keyword,
      };
    }

    return {
      ...state,
      dataQuran: API.data,
      searchSurah: action.keyword,
    };
  }

  // SELECT_DISPLAY
  if (action.type === ActionType.SELECT_DISPLAY) {
    const alertElement = document.querySelector('.success-add-lastRead');
    if (alertElement) {
      alertElement.remove();
    }

    // Button Active
    if (action.event) {
      const event = action.event.currentTarget;
      const menuNav = document.querySelectorAll('.navigation .btn-navigation');
      menuNav.forEach((menu, index) => {
        menu.classList.remove('active');
      });
      event.classList.add('active');
    }

    // Button See Last Read
    if (action.lastRead) {
      const menuNav = document.querySelectorAll('.navigation .btn-navigation');
      menuNav.forEach((menu, index) => {
        menu.classList.remove('active');
      });

      menuNav[0].classList.add('active');

      return {
        ...state,
        display: action.name,
        surah: action.numberSurah,
        scrollToAyat: action.lastRead,
      };
    }

    // See Surah
    if (action.surah) {
      return {
        ...state,
        display: action.name,
        surah: action.surah,
        scrollToAyat: null,
      };
    }

    if (action.recitations) {
      return {
        ...state,
        display: action.name,
        playingMurottal: action.recitations,
        imgQari: action.imgQari,
      };
    }

    return {
      ...state,
      display: action.name,
    };
  }

  // Select Qari
  if (action.type === ActionType.SELECT_QARI) {
    return {
      ...state,
      qariName: action.qari,
      display: action.name,
    };
  }

  return state;
};

export default rootReducer;
