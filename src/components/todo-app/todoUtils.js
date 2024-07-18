import { v1 } from 'uuid';
import { TODOS_LIST_FILTERS } from './todoData';

export const createTodo = ({ title, min, sec }) => {
  return {
    id: v1(),
    title,
    isDone: false,
    created: new Date(),
    time: `${min}:${sec}`,
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
