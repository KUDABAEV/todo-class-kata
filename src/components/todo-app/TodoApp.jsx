import React from 'react';
import TodoNew from '../todo-new/TodoNew';
import TodoItem from '../todo-item';

import TODOS_LIST_DEFAULT from './todoData';
import styles from './TodoApp.module.css';

const RenderTodoApp = ({ todoList = [] }) => {
  return (
    <div className={styles.todoApp}>
      <h1 className={styles.todoApp_title}>todos</h1>

      <div className={styles.todoApp_box}>
        <TodoNew />
        {todoList.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
};

export default class TodoApp extends React.Component {
  render() {
    return <RenderTodoApp todoList={TODOS_LIST_DEFAULT} {...this.props} />;
  }
}
