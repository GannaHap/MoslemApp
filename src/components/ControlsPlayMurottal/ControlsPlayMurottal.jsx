import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionType from '../../Redux/globalActionType';
import ButtonControls from '../ButtonControls/ButtonControls';
import SliderMurottal from '../SliderMurottal/SliderMurottal';

import './ControlsPlayMurottal.css';

class ControlsPlayMurottal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      iconPlay: 'far fa-play',
      iconAddMurottal: 'far fa-plus',
      iconRepeat: 'far fa-repeat-alt',
      valueDuration: 0,
      autoPlay: false,
      repeat: false,
    };
  }

  // Create Alert Success Add Murottal
  createAlertSuccess = (text) => {
    const root = document.querySelector('#root');

    const alert = document.createElement('div');
    alert.classList.add('success-add-lastRead');
    alert.innerHTML = text;

    const alertElement = document.querySelector('.success-add-lastRead');
    if (alertElement) {
      alertElement.remove();
    }

    root.append(alert);
  };

  // Delete Alert Success
  deleteAlertSuccess = () => {
    const alertElement = document.querySelector('.success-add-lastRead');
    if (alertElement) {
      alertElement.remove();
    }
  };

  // Reset Duration
  resetDuration = () => {
    this.setState({
      valueDuration: 0,
    });
  };

  // Play Murottal
  playMurottal = () => {
    this.props.audio.play();
    this.setState({
      iconPlay: 'far fa-pause',
    });
    setInterval(this.rangeSlider, 1);
  };

  // Pause Murottal
  pauseMurottal = () => {
    this.props.audio.pause();
    this.setState({
      iconPlay: 'far fa-play',
    });
  };

  // Handle Play
  handlePlay = () => {
    if (this.state.iconPlay === 'far fa-play') {
      this.playMurottal();
    } else {
      this.pauseMurottal();
    }
  };

  // Handle Duration
  handleDuration = (slider) => {
    this.playMurottal();
    let sliderPosition = this.props.audio.duration * (slider.value / 100);
    this.props.audio.currentTime = sliderPosition;
  };

  // Update Range Slider
  rangeSlider = () => {
    if (!isNaN(this.props.audio.duration)) {
      this.setState({
        valueDuration: this.props.audio.currentTime * (100 / this.props.audio.duration),
      });
    }

    // Jika Music Selesai
    if (this.props.audio.ended) {
      this.pauseMurottal();
      this.setState({
        iconPlay: 'far fa-play',
      });

      if (this.state.repeat) {
        setTimeout(() => {
          this.playMurottal();
        }, 700);
      }

      if (this.state.autoPlay) {
        this.resetDuration();
        this.props.nextMurottal();
        setTimeout(() => {
          this.playMurottal();
        }, 1000);
      }
    }
  };

  // Repeat
  handleButtonRepeat = () => {
    if (this.state.iconRepeat === 'far fa-repeat-alt') {
      this.setState({
        iconRepeat: 'far fa-repeat-alt active',
        autoPlay: true,
        repeat: false,
      });
    } else if (this.state.iconRepeat === 'far fa-repeat-alt active') {
      this.setState({
        iconRepeat: 'far fa-repeat-1-alt',
        autoPlay: false,
        repeat: true,
      });
    } else {
      this.setState({
        iconRepeat: 'far fa-repeat-alt',
        autoPlay: false,
        repeat: false,
      });
    }
  };

  // handleAddMurottal
  handleAddMurottal = () => {
    const { murottal, qariName, image } = this.props;
    const storages = JSON.parse(localStorage['listMurottal']);

    let row = {
      id: murottal.id,
      name: murottal.name,
      audio_url: murottal.audio_url,
      qariName: qariName,
      image: image,
    };

    let rows = [];
    let remove = [];

    if (storages.length > 0) {
      storages.forEach((storage) => {
        if (storage.audio_url !== murottal.audio_url) {
          rows.push(storage);
        } else {
          rows.push(storage);
          remove.push(storage);
        }
      });
    }

    if (remove.length === 0) {
      rows.push(row);
      this.createAlertSuccess('Berhasil Menambahkan');
    }

    if (remove.length === 1) {
      this.createAlertSuccess('Sudah ada di Playlist');
    }

    localStorage['listMurottal'] = JSON.stringify(rows);

    setTimeout(() => {
      this.deleteAlertSuccess();
    }, 3500);
  };

  componentWillUnmount() {
    this.pauseMurottal();
  }

  render() {
    const { image } = this.props;
    return (
      <div className="controls-play-murottal">
        <SliderMurottal audio={this.props.audio} handleDuration={this.handleDuration} valueDuration={this.state.valueDuration} play={this.playMurottal} />
        <ButtonControls
          handlePlay={this.handlePlay}
          handleAddMurottal={this.handleAddMurottal}
          handleRepeat={this.handleButtonRepeat}
          controlState={this.state}
          pause={this.pauseMurottal}
          resetDuration={this.resetDuration}
          play={this.playMurottal}
          image={image}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recitations: state.recitations,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    nextMurottal: () => {
      dispatch({ type: ActionType.AUTO_PLAY });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlsPlayMurottal);
