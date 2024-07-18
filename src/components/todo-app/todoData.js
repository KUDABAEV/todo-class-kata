import { v1 } from 'uuid';

export const TODOS_LIST_FILTERS = {
  all: 'ALL',
  done: 'DONE',
  active: 'ACTIVE',
  completed: 'COMPLETED',
};

const TODOS_LIST_DATA = [
  {
    title: 'Terminator',
    isDone: true,
    created: new Date(2024, 5, 8, 18),
    time: 30,
  },

  {
    title: 'Spider man',
    isDone: false,
    created: new Date(2024, 5, 8, 19),
    time: 90,
  },

  {
    title: 'Batman',
    isDone: false,
    created: new Date(),
    time: 150,
  },

  {
    title: 'Kick Ass',
    isDone: false,
    created: new Date(),
    time: 210,
  },
];

export const TODOS_LIST_DEFAULT = TODOS_LIST_DATA.map((todo) => ({
  ...todo,
  id: v1(),
}));
