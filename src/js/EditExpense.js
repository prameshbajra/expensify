import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeExpense, editExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpense extends Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }
    onClick = () => {
        this.props.removeExpense(this.props.expense.id);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onClick}>
                    Remove
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(expense => expense.id === props.match.params.id),
});
const mapDispatchToProps = dispatch => ({
    editExpense: (id, expense) => { dispatch(editExpense(id, expense)); },
    removeExpense: (id) => { dispatch(removeExpense(id)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
