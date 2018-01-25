import React from 'react';
import numeral from 'numeral';
import {connect} from 'react-redux';
import totalExpenses from '../selectors/expenses-total';
import visibleExpenses from '../selectors/expenses';

export class ExpensesSummary extends React.Component{
    render(){
        return (
            <div>
                <p>
                Viewing {this.props.expensesCount}
                {
                    this.expensesCount !== 1
                    ? ' expenses '
                    :' expense '
                }
                totalling {this.props.expensesTotal}
                </p>
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