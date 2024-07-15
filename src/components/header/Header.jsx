import React from 'react';
import * as Proptypes from 'prop-types';
import './header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  static defaultProps = {
    inputChangeLabel: 'edit todo',
    addTodo: () => {},
    onChangeInput: () => {},
  };

  static propTypes = {
    inputChangeLabel: Proptypes.string.isRequired,
    addTodo: Proptypes.func,
    onChangeInput: Proptypes.func,
  };

  state = {
    error: null,
  };

  changeError = (message) => {
    this.setState(({ error }) => {
      const newError = message;
      return {
        ...error,
        error: newError,
      };
    });
  };

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    const { onChangeInput, addTodo, inputChangeLabel } = this.props;
    const { error } = this.state;
    const addTodoClick = () => {
      if (inputChangeLabel.trim() !== '') {
        addTodo(inputChangeLabel);
        onChangeInput('');
      } else {
        this.changeError('ww');
      }
    };
    const onKeyPressHandler = (e) => {
      this.changeError(null);
      if (e.charCode === 13) {
        addTodoClick();
      }
    };
    let classError = 'new-todo';
    if (error) {
      classError += ' error-border';
    }
    return (
      <headerg className="header">
        <h1>todos</h1>
        <div className="input-box">
          <input
            value={inputChangeLabel}
            onKeyPress={onKeyPressHandler}
            onChange={(e) => onChangeInput(e.currentTarget.value)}
            className={classError}
            type="text"
            placeholder="What needs to be done?"
            ref={this.inputRef}
          />
          <input className="input-min" type="text" placeholder={0} />
          <input className="input-sec" type="text" placeholder={0} />
        </div>
        {error && <div className="error">Поле не должно быть пустым</div>}
      </headerg>
    );
  }
}
