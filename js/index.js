import React from 'react';
import ReactDOM from 'react-dom';

// HOCs
const dance = (Component) => {
  return (props) => {
    return (
      <span className="dance">
        <Component
          {...props}
          name={props.name ? `${props.name}-dance` : "-dance"}
        />
      </span>
    );
  }
}

const swirl = (Component) => {
  return (props) => {
    return (
      <span className="swirl">
        <Component
          {...props}
          name={props.name ? `${props.name}-swirl` : "-swirl"}
        />
      </span>
    );
  }
}

const associateWithPerson = (Component, name) => {
  return (props) => {
    return (
      <Component
        {...props}
        src={`assets/${name}.png`}
        name={props.name ? `${name}${props.name}` : name}
      />
    );
  }
}

// Simple Component
function Icon({ src, name, onClick }) {
  return (
    <img
      className="slack-icon"
      src={src}
      name={name}
      onClick={onClick}
    />
  );
}

// Enhanced Components
const SwirlyIcon = swirl(Icon);
const DancingIcon = dance(Icon);

const ZekeIcon = associateWithPerson(Icon, 'zeke');
const NickIcon = associateWithPerson(Icon, 'nick');

const ZekeSwirl = swirl(ZekeIcon); // or you can zekeify a SwirlyIcon
const NickSwirl = swirl(NickIcon); // same as above

const ZekeDance = dance(ZekeIcon);
const NickDance = dance(NickIcon);


// Our mock-Slack app
class Slack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msgInput: '',
    };

    this.updateMsgInput = this.updateMsgInput.bind(this);
    this.addIconToText = this.addIconToText.bind(this);
  }

  updateMsgInput(e) {
    this.setState({
      msgInput: e.target.value
    })
  }

  addIconToText(e) {
    this.setState({
      msgInput: this.state.msgInput + `:${e.target.name}: `
    })
  }

  render() {
    const Icons = [
      ZekeIcon, ZekeSwirl, ZekeDance,
      NickIcon, NickSwirl, NickDance,
    ];

    return (
      <div>
        <form>
          <button>+</button>
          <input
            value={this.state.msgInput}
            onChange={this.updateMsgInput}
          />
          <img className="smiley" src="assets/smiley.png" />
        </form>

        { Icons.map((Icon, i) => <Icon key={i} onClick={this.addIconToText} />) }
      </div>
    );
  }
}

ReactDOM.render(
  <Slack />,
  document.getElementById('app')
);