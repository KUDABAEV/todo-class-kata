import React from 'react';
import clsx from 'clsx';

import { TODOS_LIST_FILTERS } from '../todo-app/todoData';
import styles from './TodoControls.module.css';

const RenderFilterItem = ({ filter, onClick, isActive }) => {
  return (
    <li>
      <button
        className={clsx(styles.filters_itemButton, { [styles.filters_itemButton__active]: isActive })}
        onClick={onClick}
      >
        {filter}
      </button>
    </li>
  );
};

const TodoControls = ({ changeFilterTodo, filter, deleteCompletedTodo, countLeft }) => {
  return (
    <div className={styles.box}>
      <span>{countLeft} items left</span>

      <ul className={styles.filters}>
        <RenderFilterItem
          isActive={filter === TODOS_LIST_FILTERS.all}
          filter="All"
          onClick={() => changeFilterTodo(TODOS_LIST_FILTERS.all)}
        />
        <RenderFilterItem
          filter="Active"
          isActive={filter === TODOS_LIST_FILTERS.active}
          onClick={() => changeFilterTodo(TODOS_LIST_FILTERS.active)}
        />
        <RenderFilterItem
          filter="Completed"
          isActive={filter === TODOS_LIST_FILTERS.completed}
          onClick={() => changeFilterTodo(TODOS_LIST_FILTERS.completed)}
        />
      </ul>

      <button className={styles.clearCompleted} onClick={deleteCompletedTodo}>
        Clear completed
      </button>
    </div>
  );
};

export default TodoControls;
