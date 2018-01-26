import React from 'react';
import {EditExpensePage} from '../../components/EditExpensePage';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
let wrapper,startRemoveExpense, editExpense, history;
beforeEach(()=>{
   const match = {
       params: {
         id: '1'
       }
   };
   startRemoveExpense = jest.fn();
   editExpense = jest.fn();
   history = {push: jest.fn()};
   wrapper = shallow(
     <EditExpensePage
       match={match}
       expense={expenses[1]}
       startRemoveExpense={startRemoveExpense}
       editExpense={editExpense}
       history={history}/>
   );
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle startRemoveExpense', () => {
  wrapper.find('button').simulate('click');
  expect(startRemoveExpense).toHaveBeenCalledWith({id:expenses[1].id});
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenCalledWith(expenses[1].id,expenses[1]);
});
