import React from 'react';
import TodoNew from '../todo-new/TodoNew';
import TodoItem from '../todo-item';
import TodoControls from '../todo-controls';

import TODOS_LIST_DEFAULT from './todoData';
import styles from './TodoApp.module.css';

const RenderTodoApp = ({ todoList = [], deleteTodo, addTodo, changeTodoTitle, toggleDone }) => {
  return (
    <div className={styles.todoApp}>
      <h1 className={styles.todoApp_title}>todos</h1>

      <div className={styles.todoApp_box}>
        <TodoNew addTodo={addTodo} />

        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            deleteTodo={deleteTodo}
            changeTodoTitle={changeTodoTitle}
            toggleDone={toggleDone}
          />
        ))}

        <TodoControls />
      </div>
    </div>
  );
};

export default class TodoApp extends React.Component {
  state = {
    todoList: TODOS_LIST_DEFAULT,
    filters: 'all',
  };

  deleteTodo = (id) => {
    this.setState((prevState) => {
      const todoList = prevState.todoList.filter((todo) => todo.id !== id);

      return { todoList };
    });
  };

  addTodo = (newTodo) => {
    this.setState((prevState) => {
      const todoList = [...prevState.todoList, newTodo];

      return { todoList };
    });
  };

  changeTodoTitle = (id, newTitle) => {
    this.setState((prevState) => {
      const todoList = prevState.todoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: newTitle,
          };
        }
        return todo;
      });

      return { todoList };
    });
  };

  toggleDone = (id) => {
    this.setState((prevState) => {
      const todoList = prevState.todoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      });

      return { todoList };
    });
  };

  render() {
    return (
      <RenderTodoApp
        todoList={this.state.todoList}
        deleteTodo={this.deleteTodo}
        addTodo={this.addTodo}
        changeTodoTitle={this.changeTodoTitle}
        toggleDone={this.toggleDone}
      />
    );
  }
}
