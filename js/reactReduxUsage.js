import { connect } from 'react-redux';

const MsgDisplayer = (props) => (
  <div>
    <h1>{props.message}</h1>
    <button onClick={props.clearMessage}>clear</button>
  </div>
);

const mapStateToProps = state => {
  return {
    message: state.message
  };
};
const mapDispatchToProps = dispatch => {
  return {
    clearMessage: dispatch({ type: 'CLEAR_MESSAGE' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MsgDisplayer);
// connect takes two functions
  // first function passed the redux state - you can pick the pieces that are relevant to your component
  // second function is passed the dispatch method - you can define functions that know how to dispatch to the store
// You can then pass a component to connect(MS, MD) --> props from those funcs will be passed to component


// in another file
import MsgDisplayer from './components/MsgDisplayer';
<MsgDisplayer hello="hello" /> // this has been connected to store! but no other component needs to know/care :-)


// way way way simplified idea of how connect works
function connect (mapState, mapDispatch) {
  const { getState, dispatch } = store; // imagine connect just knows about the redux store somehow
  const stateProps = mapState(getState());
  const dispatchProps = mapDispatch(dispatch);
  return function(Component) {
    return function (props) {
      return (
        <Component
          {...props}
          {...stateProps}
          {...dispatchProps}
        />
      );
    }
  }
}


// how does react-redux get access to the store?!
import { Provider } from 'react-redux';
<Provider store={yourReduxStore}>
  <YourReactAppRoot />
</Provider>
// only need to do once at top level!