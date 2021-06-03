import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionType from '../../Redux/globalActionType';

import './ButtonControls.css';

class ButtonControls extends Component {
  skipMurottal = () => {
    this.props.pause();
    this.props.resetDuration();
  };

  render() {
    const { controlState } = this.props;
    const { iconPlay, iconRepeat, iconAddMurottal } = controlState;
    return (
      <div className="button-controls">
        {/* Part Repeat */}
        <div className="part-repeat">
          <i id="repeat" className={iconRepeat} onClick={() => this.props.handleRepeat()}></i>
        </div>

        {/* Part Middle */}
        <div className="control-murottal-middle">
          {/* Backward */}
          <i id="backward" className="far fa-step-backward" onClick={() => this.props.prevMurottal(this.skipMurottal, this.props.play)}></i>

          {/* Play */}
          <i id="play" className={iconPlay} onClick={() => this.props.handlePlay()}></i>

          {/* Forward */}
          <i id="forward" className="far fa-step-forward" onClick={() => this.props.nextMurottal(this.skipMurottal, this.props.play)}></i>
        </div>

        <div className="part-add-murottal">
          <i id="addMurottal" className={iconAddMurottal} onClick={() => this.props.handleAddMurottal()}></i>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    murottal: state.playingMurottal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    nextMurottal: (skipMurottal, playMurottal) => {
      skipMurottal();
      dispatch({ type: ActionType.NEXT_MUROTTAL });
      setTimeout(() => {
        playMurottal();
      }, 1000);
    },

    prevMurottal: (skipMurottal, playMurottal) => {
      skipMurottal();
      dispatch({ type: ActionType.PREV_MUROTTAL });
      setTimeout(() => {
        playMurottal();
      }, 1000);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonControls);
