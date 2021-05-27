import ActionType from './globalActionType';
import API from '../assets/data.json';

const globalState = {
  api: API.data,
  dataQuran: API.data,
  searchSurah: '',
  display: 'Dashboard',
  surah: null,
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
    if (action.event) {
      // Button Active
      const event = action.event.currentTarget;
      const menuNav = document.querySelectorAll('.navigation .btn-navigation');
      menuNav.forEach((menu, index) => {
        menu.classList.remove('active');
      });
      event.classList.add('active');
    }

    if (action.surah) {
      return {
        ...state,
        display: action.name,
        surah: action.surah,
      };
    }
    return {
      ...state,
      display: action.name,
    };
  }

  return state;
};

export default rootReducer;
