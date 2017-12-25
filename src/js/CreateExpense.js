import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

// eslint-disable-next-line
export class CreateExpense extends Component {
    onSubmit = (expense) => {
        // yo duita onSubmit chuttai ho ...
        // mathi ko form ko submit vayo ...
        // tala ko chai connect bata pass gareko props bata aako wala vayo ...
        //  testing garrna sajilo hoss vanera gareko yesto ...
        this.props.onSubmit(expense);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h1>Create Expense</h1>
                <ExpenseForm onSubmit={this.onSubmit} />
            </div >
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onSubmit: expense => dispatch(addExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(CreateExpense);
