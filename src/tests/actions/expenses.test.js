import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
test('should setup remove expense action object', () => {
  const action = removeExpense({id:'123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense object', () => {
  const action = editExpense('123',{note: 'new note',description: 'new description'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: {
      note: 'new note',
      description: 'new description'
    }
  })
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 1200,
    createdAt: 1000,
    note: 'This was last month\'s rent '
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense:{
      ...expenseData,
      id: expect.any(String)
    }
  })
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      amount: 0,
      note: '',
      createdAt: 0,
      id:expect.any(String)
    }
  })
});
