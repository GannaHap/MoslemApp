import React, { Component } from 'react';

import './SliderMurottal.css';

export default class SliderMurottal extends Component {
  durationControl = (event) => {
    const slider = event.currentTarget;
    this.props.handleDuration(slider);
  };

  countdownMurottal = (countdown, time) => {
    // const { audio } = this.props;

    // let countdown = Math.round(audio.currentTime);
    let times = time ? time : countdown;
    let duration = null;

    // Hour
    let hour = null;
    if ((countdown / 60 / 60) % 60 < 10) {
      hour = '0' + Math.floor((countdown / 60 / 60) % 60);
    } else {
      hour = '' + Math.floor((countdown / 60 / 60) % 60);
    }

    // Minute
    let minute = null;
    if ((countdown / 60) % 60 < 10) {
      minute = '0' + Math.floor((countdown / 60) % 60);
    } else {
      minute = '' + Math.floor((countdown / 60) % 60);
    }

    // Second
    let second = null;
    if (countdown % 60 < 10) {
      second = '0' + (countdown % 60);
    } else {
      second = '' + (countdown % 60);
    }

    if (!isNaN(times)) {
      let count = Math.floor((times / 60 / 60) % 60);

      // IF audio ada 1 Jam
      if (count < 1) {
        duration = `${minute}:${second}`;
        return duration;
      }
      if (count > 0) {
        duration = `${hour}:${minute}:${second}`;
        return duration;
      }
    }
  };

  // durationAudio = () => {
  //   const { audio } = this.props;

  //   const time = Math.round(audio.duration);
  //   let duration = null;

  //   // Hour
  //   let hour = null;
  //   if ((time / 60 / 60) % 60 < 10) {
  //     hour = '0' + Math.floor((time / 60 / 60) % 60);
  //   } else {
  //     hour = '' + Math.floor((time / 60 / 60) % 60);
  //   }

  //   // Minute
  //   let minute = null;
  //   if ((time / 60) % 60 < 10) {
  //     minute = '0' + Math.floor((time / 60) % 60);
  //   } else {
  //     minute = '' + Math.floor((time / 60) % 60);
  //   }

  //   // Second
  //   let second = null;
  //   if (time % 60 < 10) {
  //     second = '0' + (time % 60);
  //   } else {
  //     second = '' + (time % 60);
  //   }

  //   if (!isNaN(time)) {
  //     let count = Math.floor((time / 60 / 60) % 60);

  //     // IF audio ada 1 Jam
  //     if (count < 1) {
  //       duration = `${minute}:${second}`;
  //       return duration;
  //     }
  //     if (count > 0) {
  //       duration = `${hour}:${minute}:${second}`;
  //       return duration;
  //     }
  //   }
  // };

  render() {
    const { valueDuration, audio } = this.props;
    const time = Math.round(audio.duration);
    let countdown = Math.round(audio.currentTime);

    let countdownMurottal = this.countdownMurottal(countdown, time);
    let durationMurottal = this.countdownMurottal(time);
    return (
      <div className="slider-murottal">
        <div className="time-murottal">
          <span>{countdownMurottal ? countdownMurottal : '00:00'}</span>
          <span>{durationMurottal ? durationMurottal : '00:00'}</span>
        </div>
        <div className="section-slider-bottom">
          <input type="range" className="range-murottal" value={valueDuration} onChange={(event) => this.durationControl(event)} />
        </div>
      </div>
    );
  }
}
