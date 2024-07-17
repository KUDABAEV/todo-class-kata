import { v1 } from 'uuid';

const TODOS_LIST_DATA = [
  {
    title: 'Terminator',
    isDone: true,
    created: new Date(2024, 5, 8, 18),
    time: '00:30',
  },

  {
    title: 'Spider man',
    isDone: false,
    created: new Date(2024, 5, 8, 19),
    time: '01:30',
  },

  {
    title: 'Batman',
    isDone: false,
    created: new Date(),
    time: '02:30',
  },

  {
    title: 'Kick Ass',
    isDone: false,
    created: new Date(),
    time: '03:30',
  },
];

const TODOS_LIST_DEFAULT = TODOS_LIST_DATA.map((todo) => ({
  ...todo,
  id: v1(),
}));

export default TODOS_LIST_DEFAULT;
