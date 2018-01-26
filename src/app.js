import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import {startAddExpense, startSetExpenses} from './actions/expenses';
import {setFilterText} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import './playground/promises';

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
store.dispatch(startSetExpenses()).then(()=>{
    ReactDOM.render(jsx, document.getElementById('app'));
});
