import { v1 } from 'uuid';
import { TODOS_LIST_FILTERS, TODOS_LIST_DEFAULT } from './todoData';

export const createTodo = ({ title, min, sec }) => {
  const totalSeconds = min * 60 + sec;

  return {
    id: v1(),
    title,
    isDone: false,
    created: new Date(),
    time: totalSeconds,
  };
};

export const filterTodo = (list, filter) => {
  if (filter === TODOS_LIST_FILTERS.all) return list;

  if (filter === TODOS_LIST_FILTERS.active) {
    return list.filter((todo) => !todo.isDone);
  }

  if (filter === TODOS_LIST_FILTERS.completed) {
    return list.filter((todo) => todo.isDone);
  }

  throw new Error('Invalid filter');
};

export const saveState = (state) => {
  localStorage.setItem('todo-app-state', JSON.stringify(state));
};

export const getInitState = () => {
  const stateJson = localStorage.getItem('todo-app-state');

  const defaultState = {
    todoList: TODOS_LIST_DEFAULT,
    todoListFilter: [],
    filter: TODOS_LIST_FILTERS.all,
  };

  if (stateJson) {
    try {
      const state = JSON.parse(stateJson);
      if (state.todoList.length > 0) {
        return state;
      }
    } catch (e) {
      return defaultState;
    }
  }

  return defaultState;
};
