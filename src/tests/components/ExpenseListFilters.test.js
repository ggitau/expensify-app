import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters,altFilters} from '../fixtures/filters';

let setFilterText, sortByDate, sortByAmount, setStartDate, setEndDate,wrapper;

beforeEach(() => {
  setFilterText=jest.fn();
  sortByDate=jest.fn();
  sortByAmount=jest.fn();
  setStartDate=jest.fn();
  setEndDate=jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setFilterText={setFilterText}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should render ExpenseListFilters correctly', ()=>{
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', ()=>{
  wrapper.setProps({
    filters:altFilters
  });
  expect(wrapper).toMatchSnapshot();
});
//should handle textchange.
test('should handle text change', () => {
  const value = 'text';
  const event = {
    target: {
      value
    }
  };
  wrapper.find('input').simulate('change',event);
  expect(setFilterText).toHaveBeenCalledWith(value);
});
//should sort by date.
test('should sort by date', () => {
  const event = {
    target: {
      value: 'date'
    }
  };
  wrapper.setProps({
    filters:altFilters
  });
  wrapper.find('select').simulate('change',event);
  expect(sortByDate).toHaveBeenCalled();
});
//should sort by amount.
test('should sort by amount', () => {
  const event = {
    target: {
      value: 'amount'
    }
  };
  wrapper.find('select').simulate('change',event);
  expect(sortByAmount).toHaveBeenCalled();
});
//should handle date changes.
test('should handleDateChange', () => {
  const startDate = moment(0);
  const endDate = moment(0).add(3, 'years');

  wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate});
  expect(setStartDate).toHaveBeenCalledWith(startDate);
  expect(setEndDate).toHaveBeenCalledWith(endDate);
});
//should handle date focus changes.
test('should handleDateChange', () => {
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
