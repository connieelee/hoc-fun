import React from 'react';
import ReactDOM from 'react-dom';

const Icon = ({ src, name, sfx, onClick }) => {
  if (sfx) name = `${name}-${sfx}`;
  return (
    <img
      className="slack-icon"
      src={src}
      name={name}
      onClick={onClick}
    />
  )
}

const setPerson = (Component, name) => {
  return function PersonIcon(props) { // only includes onClick
    return (
      <Component
        {...props}
        src={`assets/${name}.png`}
        name={name}
      />
    );
  }
}

const swirl = (Component) => {
  return function SwirlyIcon(props) {
    return (
      <span className="swirl">
        <Component
          {...props}
          sfx="swirl"
        />
      </span>
    )
  }
}

const dance = (Component) => {
  return function DancingIcon(props) {
    return (
      <span className="dance">
        <Component
          {...props}
          sfx="dance"
        />
      </span>
    )
  }
}


const BenIcon = setPerson(Icon, 'benw');
const ConnieIcon = setPerson(Icon, 'connie');
const CollinIcon = setPerson(Icon, 'collin');

const BenSwirl = swirl(BenIcon);
const ConnieSwirl = swirl(ConnieIcon);
const CollinSwirl = swirl(CollinIcon);

const BenDance = dance(BenIcon);
const ConnieDance = dance(ConnieIcon);
const CollinDance = dance(CollinIcon);

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
    const iconStr = ` :${e.target.name}: `;
    // rule of thumb, if depending on previous state in next state
    // use CB version of setState
    this.setState(prevState => {
      return { msgInput: prevState.msgInput + iconStr };
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
          <BenIcon onClick={this.addIconText} />
          <BenSwirl onClick={this.addIconText} />
          <BenDance onClick={this.addIconText} />
          <ConnieIcon onClick={this.addIconText} />
          <ConnieSwirl onClick={this.addIconText} />
          <ConnieDance onClick={this.addIconText} />
          <CollinIcon onClick={this.addIconText} />
          <CollinSwirl onClick={this.addIconText} />
          <CollinDance onClick={this.addIconText} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <SlackMessager />,
  document.getElementById('app'),
);