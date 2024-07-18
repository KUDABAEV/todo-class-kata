import React from 'react';
import TodoNew from '../todo-new/TodoNew';
import TodoItem from '../todo-item';
import TodoControls from '../todo-controls';

import { TODOS_LIST_DEFAULT, TODOS_LIST_FILTERS } from './todoData';
import styles from './TodoApp.module.css';
import { filterTodo } from './todoUtils';

const RenderTodoApp = ({
  todoList = [],
  deleteTodo,
  deleteCompletedTodo,
  addTodo,
  changeTodoTitle,
  toggleDone,
  changeFilterTodo,
  filter,
  countLeft,
}) => {
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

        <TodoControls
          changeFilterTodo={changeFilterTodo}
          filter={filter}
          deleteCompletedTodo={deleteCompletedTodo}
          countLeft={countLeft}
        />
      </div>
    </div>
  );
};

export default class TodoApp extends React.Component {
  state = {
    todoList: TODOS_LIST_DEFAULT,
    todoListFilter: [],
    filter: TODOS_LIST_FILTERS.all,
  };

  componentDidMount() {
    this.setState({
      todoListFilter: filterTodo(this.state.todoList, this.state.filter),
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.filter !== prevState.filter || this.state.todoList !== prevState.todoList) {
      this.setState({
        todoListFilter: filterTodo(this.state.todoList, this.state.filter),
      });
    }
  }

  get countLeft() {
    return this.state.todoListFilter.filter((todo) => !todo.isDone).length;
  }

  deleteTodo = (id) => {
    this.setState((prevState) => {
      const todoList = prevState.todoList.filter((todo) => todo.id !== id);

      return { todoList };
    });
  };

  deleteCompletedTodo = () => {
    this.setState((prevState) => {
      const todoList = prevState.todoList.filter((todo) => !todo.isDone);

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

  changeFilterTodo = (filter) => {
    this.setState({ filter });
  };

  render() {
    return (
      <RenderTodoApp
        todoList={this.state.todoListFilter}
        deleteTodo={this.deleteTodo}
        deleteCompletedTodo={this.deleteCompletedTodo}
        addTodo={this.addTodo}
        changeTodoTitle={this.changeTodoTitle}
        toggleDone={this.toggleDone}
        changeFilterTodo={this.changeFilterTodo}
        filter={this.state.filter}
        countLeft={this.countLeft}
      />
    );
  }
}
