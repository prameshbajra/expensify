import React from 'react';
import { connect } from 'react-redux';

import { addExpense } from '../actions/expenses';

// eslint-disable-next-line
const CreateExpense = ({ dispatch }) => (
    <div>
        <h1>Create Expense</h1>
        <form onSubmit={(e) => {
            e.preventDefault();
            dispatch(addExpense({
                description: e.target.description.value,
                note: e.target.note.value,
                amount: e.target.amount.value,
            }));
            e.target.description.value = '';
            e.target.amount.value = '';
            e.target.note.value = '';
        }}
        >
            <input type="text" name="description" />
            <input type="text" name="note" />
            <input type="text" name="amount" />
            <button type="submit" >Add</button>
        </form>
    </div>
);

export default connect()(CreateExpense);
