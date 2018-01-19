import moment from 'moment';
const expenses = [
  {id: 'one', description: 'gum', note: '',amount: 195, createdAt: 0},
  {
    id: 'two',
    description: 'rent',
    note: '',amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: 'three',
    description: 'credit card', note: '',amount: 4500, createdAt: moment(0).add(4, 'days').valueOf()
  }
];


export default expenses;
