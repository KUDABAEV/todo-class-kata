import React from 'react';
import clsx from 'clsx';

import styles from './TodoNew.module.css';
import { createTodo } from '../todo-app/todoUtils';

const RenderTodoNew = ({ title, min, sec, changeMin, changeSec, changeTitle, addTodo, error }) => {
  return (
    <div>
      <button
        className={clsx(styles.box, {
          [styles.box__error]: error,
        })}
        onKeyUp={addTodo}
      >
        <input
          className={styles.input_name}
          value={title}
          onChange={(event) => changeTitle(event.target.value)}
          type="text"
          placeholder="What needs to be done?"
        />
        <input
          className={styles.input_min}
          value={min}
          onChange={(event) => changeMin(event.target.value)}
          type="number"
          placeholder="Min"
        />
        <input
          className={styles.input_sec}
          value={sec}
          onChange={(event) => changeSec(event.target.value)}
          type="number"
          placeholder="Sec"
        />
      </button>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default class TodoNew extends React.Component {
  state = {
    error: null,
    title: '',

    timer: {
      min: '',
      sec: '',
    },
  };

  changeTitle = (newTitle) => {
    this.setState(({ title }) => ({
      title: newTitle,
    }));
  };

  changeMin = (newMin) => {
    this.setState(({ timer }) => ({
      timer: {
        ...timer,
        min: newMin,
      },
    }));
  };

  changeSec = (newSec) => {
    this.setState(({ timer }) => ({
      timer: {
        ...timer,
        sec: newSec,
      },
    }));
  };

  changeError = (newErrorText) => {
    this.setState(({ error }) => ({
      error: newErrorText,
    }));
  };

  addHandler = (e) => {
    if (e.code !== 'Enter') return;

    if (this.state.title.length < 1) {
      this.changeError('Поле не должно быть пустым');
      return;
    }

    if (this.state.timer.min <= 0 && this.state.timer.sec <= 0) {
      this.changeError('Неверное время');
      return;
    }

    this.props.addTodo(
      createTodo({
        title: this.state.title,
        min: Number(this.state.timer.min),
        sec: Number(this.state.timer.sec),
      })
    );

    this.changeMin('');
    this.changeSec('');
    this.changeTitle('');
    this.changeError('');
  };

  render() {
    return (
      <RenderTodoNew
        min={this.state.timer.min}
        sec={this.state.timer.sec}
        title={this.state.title}
        changeMin={this.changeMin}
        changeSec={this.changeSec}
        changeTitle={this.changeTitle}
        addTodo={this.addHandler}
        error={this.state.error}
      />
    );
  }
}
