import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import './todo-list-item.css';

export default class TodoListItem extends React.Component {
  state = {
    editMode: false,
  };

  changeEditMode = () => {
    this.setState(({ editMode }) => {
      return {
        editMode: !editMode,
      };
    });
  };

  render() {
    const { editMode } = this.state;
    const { id, title, created, isDone, onDeleteTodo, onChangeDone, onEditTodo, onChangeEditInput } = this.props;

    const onKeyPressHandler = (e) => {
      if (e.code === 'Enter') {
        if (e.target.value.length) {
          onEditTodo(id, e.target.value);
          this.changeEditMode();
          onChangeEditInput('');
        }
      }
    };

    let completed = '';

    if (isDone) {
      completed += ' completed';
    }

    return (
      <div>
        {editMode ? (
          <input
            className="edit-input"
            defaultValue={title}
            type="text"
            placeholder="Edit"
            onChange={(e) => onChangeEditInput(e.currentTarget.value)}
            onKeyDown={onKeyPressHandler}
          />
        ) : (
          <li className={`view ${completed}`}>
            <input className="toggle" type="checkbox" checked={isDone} onChange={() => onChangeDone(id)} />
            <label>
              <button onClick={() => onChangeDone(id)} className="description">
                {title}
              </button>
              <span className="created">{`created ${formatDistanceToNow(created, {
                includeSeconds: true,
                addSuffix: true,
              })}`}</span>
            </label>
            <button className="icon icon-edit" onClick={() => this.changeEditMode()}></button>
            <button
              className="icon icon-destroy"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteTodo(id);
              }}
            ></button>
          </li>
        )}
      </div>
    );
  }
}
