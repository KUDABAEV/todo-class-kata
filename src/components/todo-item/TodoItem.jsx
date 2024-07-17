import React from 'react';
import { formatDistanceToNow } from 'date-fns';

import CheckBox from '../check-box';
import styles from './TodoItem.module.css';
import Icon from '../Icon/Icon';

const RenderTodoItemView = ({ title, isDone, isRanTimer, time, created }) => {
  return (
    <li className={styles.item}>
      <label className={styles.label}>
        <CheckBox checked={isDone} onChange={() => {}} />
        <h3 className={styles.title}>{title}</h3>
      </label>

      <div className={styles.controls}>
        <div className={styles.timer}>
          {isRanTimer ? <Icon type="pause" /> : <Icon type="play" />}
          <span>{time}</span>
        </div>
        <div className={styles.created}>{created}</div>
        <div className={styles.controls__btn}>
          <Icon type="edit" />
          <Icon type="destroy" />
        </div>
      </div>
    </li>
  );
};

const RenderTodoItemEdit = ({}) => {
  return <li>RenderTodoItemEdit</li>;
};

export default class TodoItem extends React.Component {
  state = {
    editMode: false,
    isRanTimer: false,

    created: `created ${formatDistanceToNow(this.props.created, {
      includeSeconds: true,
      addSuffix: true,
    })}`,
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
      <RenderTodoItemEdit isRanTimer={this.state.isRanTimer} />
    ) : (
      <RenderTodoItemView
        isRanTimer={this.state.isRanTimer}
        title={this.props.title}
        isDone={this.props.isDone}
        time={this.props.time}
        created={this.state.created}
      />
    );
  }
}
