import React, { Component } from 'react';
import { connect } from 'react-redux';
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

    // this.url = this.props.murottal.audio_url;
    // this.audio = new Audio(this.url);
  }

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

  // nextMurottal = () => {
  //   const indexThisAudio = this.props.murottal.id;
  //   const allRecitation = this.props.recitations;
  //   const newRecitation = allRecitation[indexThisAudio];

  //   console.log(newRecitation);
  // };

  render() {
    console.log(this.props.audio);
    console.log(this.props);
    return (
      <div className="controls-play-murottal">
        <SliderMurottal audio={this.props.audio} handleDuration={this.handleDuration} valueDuration={this.state.valueDuration} play={this.playMurottal} />
        <ButtonControls handlePlay={this.handlePlay} handleRepeat={this.handleButtonRepeat} controlState={this.state} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recitations: state.recitations,
  };
};

export default connect(mapStateToProps)(ControlsPlayMurottal);
