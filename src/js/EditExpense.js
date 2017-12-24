import React from 'react';
import { connect } from 'react-redux';

import { removeExpense, editExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

/* eslint-disable */
const EditExpense = props => (
    <div>
        <ExpenseForm
            expense={props.expense}
            onSubmit={(expense) => {
                props.dispatch(editExpense(props.expense.id, expense));
                props.history.push('/');
            }}
        />
        <button onClick={() => {
            props.dispatch(removeExpense(props.expense.id));
            props.history.push('/');
        }}>
            Remove
        </button>
    </div>
);
/* eslint-enable */

export default connect((state, props) => ({
    expense: state.expenses.find(expense => expense.id === props.match.params.id),
}))(EditExpense);
