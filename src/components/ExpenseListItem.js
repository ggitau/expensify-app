import React from 'react';
import {removeExpense} from '../actions/expenses';
import {Link} from 'react-router-dom';
const ExpenseListItem = ({id,description,amount,createdAt}) => (
    <div>
    <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
    <p>{amount}</p>
    <p>{createdAt}</p>

    </div>
);
export default ExpenseListItem;
