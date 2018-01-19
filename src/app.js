import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setFilterText} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
store.dispatch(addExpense({description:'Water bill',amount:1000,createdAt:1000}));
store.dispatch(addExpense({description:'Gas bill',amount:500,createdAt:1200}));
store.dispatch(addExpense({description:'Water bill',amount:1600,createdAt:1100}));


const state = store.getState();
console.log(getVisibleExpenses(state.expenses,state.filters));

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
