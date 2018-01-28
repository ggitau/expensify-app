import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import {connect} from 'react-redux';
import totalExpenses from '../selectors/expenses-total';
import visibleExpenses from '../selectors/expenses';

export class ExpensesSummary extends React.Component{
    render(){
        return (
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">
                    Viewing <span>{this.props.expensesCount}</span>
                    {
                        this.expensesCount !== 1
                        ? ' expenses '
                        :' expense '
                    }
                    totalling <span>{this.props.expensesTotal}</span>
                    </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
                </div>
            </div>
            
        );
    }
}
const mapStateToProps = (state) => {
    const expenses=visibleExpenses(state.expenses,state.filters);
    const total=totalExpenses(expenses)/100;
    return {
        expensesTotal:numeral(total).format('$0,0.00'),
        expensesCount:expenses.length
    };
};
export default connect(mapStateToProps)(ExpensesSummary);