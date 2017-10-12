import { connect } from 'react-redux';
// connect connects the redux store to your component,
// subscribing to specific updates


/* 

WITHOUT being aware of the redux store in any capacity,
we want a component to be able to...

  1) Get updates from specific pieces of state
  2) Have access to methods that update store

*/

const mapStateToProps = (state) => {
  return { // these are props that get passed to component being connected to
    messages: state.messages,
    newMessageEntry: state.newMessageEntry,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessages () {
      dispatch(fetchMessages()); // you would have to import this action creator
    }
  }
}

const ConnectedMessagesList = connect(mapStateToProps, mapDispatchToProps)(MessagesList);

// THE BURNING QUESTION IS: how does `connect` know what `state` and `dispatch` are?
// root of your react app (maybe index.js?)
import { Provider } from 'react-redux';
import store from '../redux/store';

ReactDOM.render(
  <Provider store={store}>
    <YourReactApp />
  </Provider>,
  document.getElementById.....
);

// class MessagesList extends React.Component {
//   componentDidMount(){
//     this.props.fetchMessage();
//   }
//   render() {
//     return (
//       <ul>
//         {this.props.messages.map.......}
//       </ul>
//     )
//   }
// }