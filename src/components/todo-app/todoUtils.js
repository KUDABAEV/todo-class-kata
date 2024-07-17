import { v1 } from 'uuid';

export const createTodo = ({ title, min, sec }) => {
  return {
    id: v1(),
    title,
    isDone: false,
    created: new Date(),
    time: `${min}:${sec}`,
  };
};

export const createTodo2 = () => {};
