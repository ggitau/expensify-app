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
                    this.props.expensesCount>1 || this.props.expensesCount == 0
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
    return {
        expensesTotal:numeral(totalExpenses(visibleExpenses(state.expenses,state.filters))/100).format('$0,0.00'),
        expensesCount:visibleExpenses(state.expenses,state.filters).length
    };
};
export default connect(mapStateToProps)(ExpensesSummary);