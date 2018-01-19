import React from 'react';
import {EditExpensePage} from '../../components/EditExpensePage';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
let wrapper,removeExpense, editExpense, history;
beforeEach(()=>{
   const match = {
       params: {
         id: '1'
       }
   };
   removeExpense = jest.fn();
   editExpense = jest.fn();
   history = {push: jest.fn()};
   wrapper = shallow(
     <EditExpensePage
       match={match}
       expense={expenses[1]}
       removeExpense={removeExpense}
       editExpense={editExpense}
       history={history}/>
   );
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle removeExpense', () => {
  wrapper.find('button').simulate('click');
  expect(removeExpense).toHaveBeenCalledWith(expenses[1].id);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenCalledWith(expenses[1].id,expenses[1]);
});
