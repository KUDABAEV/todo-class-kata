import React from 'react';

import CheckBox from '../check-box';
import styles from './TodoItem.module.css';
import Icon from '../Icon/Icon';

const RenderTodoItemView = ({
  title = 'title-name',
  isDone = false,
  isRanTimer,
  time = '00:00',
  created = 'created less than 5 seconds ago',
}) => {
  return (
    <li className={styles.item}>
      <label className={styles.label}>
        <CheckBox />
        <h3 className={styles.title}>{title}</h3>
      </label>

      <div className={styles.controls}>
        <div className={styles.timer}>
          {isRanTimer ? <Icon type="pause" /> : <Icon type="play" />}
          <span>{time}</span>
        </div>
        <div className={styles.created}>{'created'}</div>
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
        created={this.props.created}
      />
    );
  }
}
