import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

// eslint-disable-next-line
const CreateExpense = ({ dispatch, history }) => (
    <div>
        <h1>Create Expense</h1>
        <ExpenseForm onSubmit={(expense) => {
            dispatch(addExpense(expense));
            history.push('/');
        }}
        />
    </div>
);

export default connect()(CreateExpense);
