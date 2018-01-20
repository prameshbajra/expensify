import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class CreateExpense extends Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <Header textAlign="center" color="grey">Create Expense</Header>
                <ExpenseForm onSubmit={this.onSubmit} />
            </div >
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addExpense: expense => dispatch(addExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(CreateExpense);
