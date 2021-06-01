import React, { Component } from 'react';
import { connect } from 'react-redux';
import BarPlayMurottal from '../components/BarPlayMurottal/BarPlayMurottal';
import ControlsPlayMurottal from '../components/ControlsPlayMurottal/ControlsPlayMurottal';
import ThumbPlayMurottal from '../components/ThumbPlayMurottal/ThumbPlayMurottal';

class PlayMurottal extends Component {
  render() {
    const { imgQari, qariName, playingMurottal } = this.props;
    let url = playingMurottal.audio_url;
    let audio = new Audio(url);

    return (
      <div className="play-murottal">
        <ThumbPlayMurottal image={imgQari} qariName={qariName} />
        <BarPlayMurottal qariName={qariName} surahName={playingMurottal.name} />
        <ControlsPlayMurottal murottal={playingMurottal} audio={audio} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(PlayMurottal);
