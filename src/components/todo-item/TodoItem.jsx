import React from 'react';
import clsx from 'clsx';
import { format, formatDistanceToNow } from 'date-fns';

import CheckBox from '../check-box';
import styles from './TodoItem.module.css';
import Icon from '../Icon/Icon';

const RenderTodoItemView = ({
  title,
  isDone,
  isRanTimer,
  time,
  created,
  deleteTodo,
  toggleDone,
  toggleEditMode,
  toggleTimer,
}) => {
  return (
    <li className={clsx(styles.item, { [styles.item__completed]: isDone })}>
      <button className={styles.label} onClick={toggleDone}>
        <CheckBox checked={isDone} onChange={toggleDone} />
        <h3 className={styles.title}>{title}</h3>
      </button>

      <div className={styles.controls}>
        <div className={styles.timer}>
          {isRanTimer ? <Icon type="pause" onClick={toggleTimer} /> : <Icon type="play" onClick={toggleTimer} />}
          <span>{time}</span>
        </div>
        <div className={styles.created}>{created}</div>
        <div className={styles.controls__btn}>
          <Icon type="edit" onClick={toggleEditMode} />
          <Icon type="destroy" onClick={deleteTodo} />
        </div>
      </div>
    </li>
  );
};

const RenderTodoItemEdit = ({ title, changeNewTitle, toggleEditMode, inputTitleRef }) => {
  return (
    <li className={styles.item} onKeyUp={(e) => (e.code === 'Enter' ? toggleEditMode() : null)}>
      <input
        className={styles.inputEdit}
        ref={inputTitleRef}
        value={title}
        onChange={(event) => changeNewTitle(event.target.value)}
        type="text"
        placeholder="Enter todo title"
      />
      <Icon type="edit" onClick={toggleEditMode} />
    </li>
  );
};

export default class TodoItem extends React.Component {
  state = {
    editMode: false,
    editTitle: this.props.title,
    timerId: null,

    inputTitleRef: React.createRef(null),
  };

  get formattedCreatedTime() {
    const formattedTime = formatDistanceToNow(this.props.created, {
      includeSeconds: true,
      addSuffix: true,
    });

    return `created ${formattedTime}`;
  }

  get formattedTime() {
    const formattedTime = new Date();
    formattedTime.setMinutes(Math.floor(this.props.timeSecond / 60));
    formattedTime.setSeconds(this.props.timeSecond % 60);

    return format(formattedTime, 'mm:ss');
  }

  componentDidMount() {
    if (this.props.isTimerRun) {
      this.runTimer();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.isTimerRun) {
      if (this.timerId) clearInterval(this.timerId);
      this.runTimer();
    } else {
      clearInterval(this.timerId);
    }

    if (this.state.editMode) {
      setTimeout(() => {
        this.state.inputTitleRef.current.focus();
      }, 0);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  runTimer = () => {
    this.timerId = setInterval(() => {
      if (this.props.timeSecond > 0) {
        this.props.changeTodoTime(this.props.id, this.props.timeSecond - 1);
      } else {
        clearInterval(this.timerId);
        this.props.toggleDone(this.props.id);
        this.props.toggleTimer(this.props.id);
      }
    }, 1000);
  };

  changeNewTitle = (newTitle) => {
    this.setState(({ editTitle }) => {
      return {
        editTitle: newTitle,
      };
    });
  };

  handlerSaveNewTitle = () => {
    if (this.state.editTitle.length < 1) return;

    this.props.changeTodoTitle(this.props.id, this.state.editTitle);
    this.toggleEditMode();
  };

  toggleEditMode = () => {
    this.setState(({ editMode }) => {
      return {
        editMode: !editMode,
      };
    });
  };

  render() {
    return this.state.editMode ? (
      <RenderTodoItemEdit
        title={this.state.editTitle}
        changeNewTitle={this.changeNewTitle}
        toggleEditMode={this.handlerSaveNewTitle}
        inputTitleRef={this.state.inputTitleRef}
      />
    ) : (
      <RenderTodoItemView
        isRanTimer={this.props.isTimerRun}
        title={this.props.title}
        isDone={this.props.isDone}
        time={this.formattedTime}
        created={this.formattedCreatedTime}
        deleteTodo={() => this.props.deleteTodo(this.props.id)}
        toggleDone={() => this.props.toggleDone(this.props.id)}
        toggleEditMode={this.toggleEditMode}
        toggleTimer={() => this.props.toggleTimer(this.props.id)}
      />
    );
  }
}
