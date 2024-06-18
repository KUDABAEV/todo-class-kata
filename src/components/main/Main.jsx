import * as Proptypes from 'prop-types';
import React from 'react';
import './main.css';
import TodoList from '../todo-list';

export default class Main extends React.Component {
  static defaultProps = {
    onChangeEditInput: () => {},
    onEditTodo: () => {},
    todos: [],
    onDeleteTodo: () => {},
    onChangeDone: () => {},
  };

  static propTypes = {
    onChangeEditInput: Proptypes.func,
    onEditTodo: Proptypes.func,
    todos: Proptypes.arrayOf(Proptypes.object).isRequired,
    onDeleteTodo: Proptypes.func,
    onChangeDone: Proptypes.func,
  };

  render() {
    return (
      <section className="main">
        <TodoList
          onChangeEditInput={this.props.onChangeEditInput}
          onEditTodo={this.props.onEditTodo}
          todos={this.props.todos}
          onDeleteTodo={this.props.onDeleteTodo}
          onChangeDone={this.props.onChangeDone}
        />
      </section>
    );
  }
}
