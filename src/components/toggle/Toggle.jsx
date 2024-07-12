import React from 'react';

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      savedMinute: 0,
      savedSecond: 0,
    };
    this.interval = null;
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isToggleOn !== this.state.isToggleOn) {
      if (this.state.isToggleOn) {
        this.interval = setInterval(this.props.updateTimer, 1000);
      } else {
        clearInterval(this.interval);
        this.setState({
          savedMinute: this.props.minute,
          savedSecond: this.props.second,
        });
      }
    }
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <span className="description">
        <button className="icon icon-play" disabled={this.state.isToggleOn} onClick={this.handleClick}></button>
        <button className="icon icon-pause" disabled={!this.state.isToggleOn} onClick={this.handleClick}></button>
        <span className="timer">
          {this.props.minute}:{this.props.second}
        </span>
      </span>
    );
  }
}
