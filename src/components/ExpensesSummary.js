import React from 'react';
import numeral from 'numeral';
import {connect} from 'react-redux';
import totalExpenses from '../selectors/expenses-total';

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
        expensesTotal:numeral(totalExpenses(state.expenses)/100).format('$0,0.00'),
        expensesCount:state.expenses.length
    };
};
export default connect(mapStateToProps)(ExpensesSummary);