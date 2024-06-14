import { v1 } from 'uuid';
import React from 'react';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';
import './todo-app.css';

export default class TodoApp extends React.Component {
  state = {
    todoList: [
      { id: v1(), title: 'Terminator', isDone: true, created: new Date(2024, 5, 8, 18) },
      { id: v1(), title: 'Spider man', isDone: false, created: new Date(2024, 5, 8, 19) },
      { id: v1(), title: 'Batman', isDone: false, created: new Date() },
      { id: v1(), title: 'Kick Ass', isDone: false, created: new Date() },
    ],
    inputText: '',
    editText: '',
    filters: 'all',
  };

  onEditTodo = (id, newTitle) => {
    this.setState(({ todoList }) => {
      const newTodoList = todoList.map((todo) => {
        return todo.id === id ? { ...todo, title: newTitle } : todo;
      });

      return {
        todoList: newTodoList,
      };
    });
  };

  onDeleteCompletedTodos = () => {
    this.setState(({ todoList }) => {
      const deleteTodoListCompleted = todoList.filter((f) => f.isDone !== true);
      return {
        todoList: deleteTodoListCompleted,
      };
    });
  };

  onChangeEditInput = (value) => {
    this.setState({
      editText: value,
    });
  };

  onChangeInput = (value) => {
    this.setState({
      inputText: value,
    });
  };

  addTodo = (text) => {
    this.setState(({ todoList }) => {
      const newTodo = { id: v1(), title: text, isDone: false, created: new Date() };
      const newTodoList = [newTodo, ...todoList];
      return {
        todoList: newTodoList,
      };
    });
  };

  onDeleteTodo = (id) => {
    this.setState((state) => {
      const todoDelete = state.todoList.filter((item) => item.id !== id);
      return {
        ...state.todoList,
        todoList: todoDelete,
      };
    });
  };

  onChangeDone = (id) => {
    this.setState(({ todoList }) => {
      const idx = todoList.findIndex((el) => el.id === id);

      const currentItem = todoList[idx];
      const changeItemDone = { ...currentItem, isDone: !currentItem.isDone };

      const changeArr = [...todoList.slice(0, idx), changeItemDone, ...todoList.slice(idx + 1)];
      return {
        todoList: changeArr,
      };
    });
  };

  changeFilterTodos = (filter) => {
    this.setState(({ filters }) => {
      return {
        ...filters,
        filters: filter,
      };
    });
  };

  render() {
    const todos = this.state.todoList;
    let filtersTodos = todos;
    const filter = this.state.filters;

    if (filter === 'completed') {
      filtersTodos = todos.filter((f) => f.isDone === true);
    }

    if (filter === 'active') {
      filtersTodos = todos.filter((f) => f.isDone === false);
    }

    return (
      <section className="todoapp">
        <Header addTodo={this.addTodo} inputChangeLabel={this.state.inputText} onChangeInput={this.onChangeInput} />
        <Main
          inputChangeEditLabel={this.state.editText}
          onChangeEditInput={this.onChangeEditInput}
          onEditTodo={this.onEditTodo}
          todos={filtersTodos}
          onDeleteTodo={this.onDeleteTodo}
          onChangeDone={this.onChangeDone}
        />
        <Footer
          todos={filtersTodos}
          changeFilterTodos={this.changeFilterTodos}
          onDeleteCompletedTodos={this.onDeleteCompletedTodos}
          filter={filter}
        />
      </section>
    );
  }
}
