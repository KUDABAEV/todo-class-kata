import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

export default class TodoList extends React.Component {
  render() {
    const { todos } = this.props;

    const elementsTodos = todos.map((item) => {
      return (
        <TodoListItem
          inputChangeEditLabel={this.props.inputChangeEditLabel}
          onChangeEditInput={this.props.onChangeEditInput}
          onEditTodo={this.props.onEditTodo}
          key={item.id}
          {...item}
          onDeleteTodo={this.props.onDeleteTodo}
          onChangeDone={this.props.onChangeDone}
        />
      );
    });

    return <ul className="todo-list">{elementsTodos}</ul>;
  }
}
