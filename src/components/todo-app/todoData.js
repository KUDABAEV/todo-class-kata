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
    created: new Date(2024, 5, 8, 18),
    timeSecond: 30,
    isDone: true,
  },

  {
    title: 'Spider man',
    created: new Date(2024, 5, 8, 19),
    timeSecond: 90,
  },

  {
    title: 'Batman',
    created: new Date(),
    timeSecond: 150,
  },

  {
    title: 'Kick Ass',
    created: new Date(),
    timeSecond: 210,
    isTimerRun: true,
  },
];

export const TODOS_LIST_DEFAULT = TODOS_LIST_DATA.map((todo) => ({
  isDone: false,
  isTimerRun: false,
  id: v1(),
  ...todo,
}));
