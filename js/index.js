import React from 'react';
import ReactDOM from 'react-dom';

const Icon = ({ src, name, addIconText }) => {
  return (
    <img
      className="slack-icon"
      src={src}
      name={name}
      onClick={addIconText}
    />
  );
};

const addSfx = (Component, sfx) => {
  return function SfxComponent(props) {
    return (
      <span className={sfx}>
        <Component
          {...props}
          name={`${props.name}-${sfx}`}
        />
      </span>
    );
  }
}

const setPerson = (Icon, name) => {
  return function PersonIcon(props) {
    return (
      <Icon
        {...props}
        src={`assets/${name}.png`}
        name={name}
      />
    );
  }
}

const SwirlIcon = addSfx(Icon, 'swirl');
const DanceIcon = addSfx(Icon, 'dance');

const CollinIcon = setPerson(Icon, 'collin');
const CollinSwirl = setPerson(SwirlIcon, 'collin');
const CollinDance = setPerson(DanceIcon, 'collin');

class SlackMessager extends React.Component {
  constructor() {
    super();
    this.state = {
      msgInput: '',
    };
    this.updateMsgInput = this.updateMsgInput.bind(this);
    this.addIconText = this.addIconText.bind(this);
  }

  updateMsgInput(e) {
    this.setState({ msgInput: e.target.value });
  }

  addIconText(e) {
    const text = ` :${e.target.name}:`;
    this.setState(prevState => {
      return { msgInput: prevState.msgInput + text };
    });
  }

  render() {
    return (
      <div>
        <form>
          <button>+</button>
          <input value={this.state.msgInput} onChange={this.updateMsgInput} />
          <img className="smiley" src="assets/smiley.png" />
        </form>
        <div>
          <CollinIcon addIconText={this.addIconText} />
          <CollinSwirl addIconText={this.addIconText} />
          <CollinDance addIconText={this.addIconText} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <SlackMessager />,
  document.getElementById('app'),
);
