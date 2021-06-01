import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionType from '../../Redux/globalActionType';

import './ButtonControls.css';

class ButtonControls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addMurottal: 'far fa-plus',
    };
  }

  render() {
    const { controlState } = this.props;
    const { iconPlay, iconRepeat } = controlState;
    return (
      <div className="button-controls">
        {/* Part Repeat */}
        <div className="part-repeat">
          <i id="repeat" className={iconRepeat} onClick={() => this.props.handleRepeat()}></i>
        </div>

        {/* Part Middle */}
        <div className="control-murottal-middle">
          {/* Backward */}
          <i id="backward" className="far fa-step-backward"></i>

          {/* Play */}
          <i id="play" className={iconPlay} onClick={() => this.props.handlePlay()}></i>

          {/* Forward */}
          <i id="forward" className="far fa-step-forward" onClick={() => this.props.nextMurottal()}></i>
        </div>

        <div className="part-add-murottal">
          <i id="addMurottal" className={this.state.addMurottal} onClick={() => this.handleAddMurottal()}></i>
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
    nextMurottal: () => {
      dispatch({ type: ActionType.NEXT_MUROTTAL });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonControls);
