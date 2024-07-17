import React from 'react';
import * as Proptypes from 'prop-types';

import styles from './TodoNew.module.css';

const RenderTodoNew = ({ name, min, sec, changeMin, changeSec, changeName }) => {
  return (
    <button className={styles.box}>
      <input
        className={styles.input_name}
        value={name}
        onChange={changeName}
        type="text"
        placeholder="What needs to be done?"
      />
      <input className={styles.input_min} value={min} onChange={changeMin} type="number" placeholder="Min" />
      <input className={styles.input_sec} value={sec} onChange={changeSec} type="number" placeholder="Sec" />
    </button>
  );
};

export default class TodoNew extends React.Component {
  state = {
    error: null,
    name: '',
    timer: {
      min: '',
      sec: '',
    },
  };

  changeName = (e) => {
    this.setState(({ name }) => ({
      name: e.target.value,
    }));
  };

  changeMin = (e) => {
    this.setState(({ timer }) => ({
      timer: {
        ...timer,
        min: Number(e.target.value),
      },
    }));
  };

  changeSec = (e) => {
    this.setState(({ timer }) => ({
      timer: {
        ...timer,
        sec: Number(e.target.value),
      },
    }));
  };

  render() {
    return (
      <RenderTodoNew
        min={this.state.timer.min}
        sec={this.state.timer.sec}
        name={this.state.name}
        changeMin={this.changeMin}
        changeSec={this.changeSec}
        changeName={this.changeName}
      />
    );
  }
}
