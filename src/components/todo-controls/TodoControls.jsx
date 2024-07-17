import React from 'react';
import clsx from 'clsx';

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

const TodoControls = ({}) => {
  return (
    <div className={styles.box}>
      <span>0 items left</span>

      <ul className={styles.filters}>
        <RenderFilterItem isActive={true} filter="All" onClick={() => {}} />
        <RenderFilterItem filter="Active" onClick={() => {}} />
        <RenderFilterItem filter="Completed" onClick={() => {}} />
      </ul>

      <button className={styles.clearCompleted}>Clear completed</button>
    </div>
  );
};

export default TodoControls;
