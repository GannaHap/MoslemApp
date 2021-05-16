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
  // Search Surah
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

  if (action.type === ActionType.SELECT_DISPLAY) {
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
