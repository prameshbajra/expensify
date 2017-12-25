import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class CreateExpense extends Component {
    onSubmit = (expense) => {
        this.props.onSubmitFromProps(expense);
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
    onSubmitFromProps: expense => dispatch(addExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(CreateExpense);
