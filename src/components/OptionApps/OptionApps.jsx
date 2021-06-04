import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionType from '../../Redux/globalActionType';

import './OptionApps.css';

class OptionApps extends Component {
  showOption = (event) => {
    event.stopPropagation();
    const aboutUs = document.querySelector('.aboutUs');

    if (aboutUs.classList.contains('hide')) {
      aboutUs.classList.remove('hide');
    } else {
      aboutUs.classList.add('hide');
    }
  };

  render() {
    document.addEventListener('click', () => {
      const aboutUs = document.querySelector('.aboutUs');
      if (!aboutUs.classList.contains('hide')) {
        aboutUs.classList.add('hide');
      }
    });
    return (
      <div className="option-apps" onClick={(e) => this.showOption(e)}>
        <i className="far fa-ellipsis-v"></i>

        <div className="aboutUs hide" name="AboutUs" onClick={(e) => this.props.handleAboutUs(e)}>
          <i className="fal fa-info-circle"></i>
          <span>Tentang</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataQuran: state.dataQuran,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAboutUs: (e) => dispatch({ type: ActionType.SELECT_DISPLAY, name: e.currentTarget.getAttribute('name') }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OptionApps);
