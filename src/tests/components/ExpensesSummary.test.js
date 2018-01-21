import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary when expenses count > 1 ', () => {
    const wrapper = shallow(<ExpensesSummary expensesTotal="$19.23" expensesCount={2}/>)
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary when expenses count = 1 ', () => {
    const wrapper = shallow(<ExpensesSummary expensesTotal="$19.23" expensesCount={1}/>)
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary when expenses count = 0 ', () => {
    const wrapper = shallow(<ExpensesSummary expensesTotal="$19.23" expensesCount={0}/>)
    expect(wrapper).toMatchSnapshot();
});