import { connect } from 'react-redux';
import Player from './Player';

import { setProgress, play, } from './action-creators/player';

/*

action-creators
  index --> imports all actions from other action files
        --> exports them in a master action creators object
  playerActions
  albumActions
reducers
  rootReducer
  playerReducer
  albumReducer
Components
  ...
Containers
  ...

*/

function mapStateToProps(state/*, ownProps*/) {
  return {
    currentSong: state.player.currentSong,
    currentSongList: state.player.currentSongList,
    isPlaying: state.player.isPlaying,
    progress: state.player.progress,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setProgress: (progress) => { dispatch(setProgress(progress)) },
    play: () => { dispatch(play()) } 
  }
}

export default PlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);

// afternote: I forgot to talk about the Provider! Oops.
