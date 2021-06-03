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
  recitations: null,
  indexMurottal: null,
};

// Next Murottal
const nextMurottal = (recitations, index) => {
  const newRecitation = recitations[index + 1];
  if (index === recitations.length - 1) {
    const newRecitation = recitations[0];
    return newRecitation;
  }

  return newRecitation;
};

// Previous Murottal
const prevMurottal = (recitations, index) => {
  if (index === 0) {
    const newRecitation = recitations[recitations.length - 1];
    return newRecitation;
  } else {
    const newRecitation = recitations[index - 1];

    return newRecitation;
  }
};

// Auto Play
const autoPlay = (playingMurottal, recitations) => {
  const indexThisAudio = playingMurottal.id;
  const newRecitation = recitations[indexThisAudio];

  if (indexThisAudio === 114) {
    const newRecitation = recitations[0];
    return newRecitation;
  }

  return newRecitation;
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

    // Select Murottal
    if (action.murottal) {
      if (action.qariName) {
        return {
          ...state,
          display: action.name,
          playingMurottal: action.murottal,
          imgQari: action.imgQari,
          recitations: action.recitations,
          indexMurottal: action.indexMurottal,
          qariName: action.qariName,
        };
      }
      return {
        ...state,
        display: action.name,
        playingMurottal: action.murottal,
        imgQari: action.imgQari,
        recitations: action.recitations,
        indexMurottal: action.indexMurottal,
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
      recitations: action.recitations,
    };
  }

  // Next_MUROTTAL
  if (action.type === ActionType.NEXT_MUROTTAL) {
    const recitations = state.recitations;
    const index = state.indexMurottal;
    let count = null;
    const newRecitation = nextMurottal(recitations, index);

    if (index === recitations.length - 1) {
      count = 0;
    } else {
      count = index + 1;
    }

    if (newRecitation.image) {
      return {
        ...state,
        playingMurottal: newRecitation,
        indexMurottal: count,
        imgQari: newRecitation.image,
        qariName: newRecitation.qariName,
      };
    }

    return {
      ...state,
      playingMurottal: newRecitation,
      indexMurottal: count,
    };
  }

  // PREV MUROTTAL
  if (action.type === ActionType.PREV_MUROTTAL) {
    const recitations = state.recitations;
    const index = state.indexMurottal;
    let count = null;
    const newRecitation = prevMurottal(recitations, index);

    if (index === 0) {
      count = recitations.length - 1;
    } else {
      count = index - 1;
    }

    if (newRecitation.image) {
      return {
        ...state,
        playingMurottal: newRecitation,
        indexMurottal: count,
        imgQari: newRecitation.image,
        qariName: newRecitation.qariName,
      };
    }

    return {
      ...state,
      playingMurottal: newRecitation,
      indexMurottal: count,
    };
  }

  // AUTO_PLAY
  if (action.type === ActionType.AUTO_PLAY) {
    const playingMurottal = state.playingMurottal;
    const recitations = state.recitations;

    const newRecitation = autoPlay(playingMurottal, recitations);
    return {
      ...state,
      playingMurottal: newRecitation,
    };
  }

  return state;
};

export default rootReducer;
